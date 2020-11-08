const httpStatus = require('http-status');
const logger = require('../../config/logger');
const catchAsync = require('../../utils/catchAsync');
const userController = require('../user/user.controller');
const tokenService = require('../../services/auth/token.service');
const { EMAIL } = require('../../config/constants');
const { sendMail } = require('../../services/mail');
const { RESET } = require('../../services/mail/template/library');
const { constructResetUrl } = require('../../utils/helpers');
const userService = require('../../services/user/user.service');
const errorCode = require('../../config/errorCode');

const relogin = (res, message = 'Login Expired, Please login') => {
    res.clearCookie('rt');
    res.clearCookie('at');
    logger.warn('Relogin');
    return res.status(httpStatus.OK).json({ message, status: false });
};

const signUp = async (res, user) => {
    const { refreshToken } = tokenService.generateTokens(res, {
        email: user.email,
        role: user.role,
    });
    tokenService.updateRefreshToken(user, refreshToken);
    logger.info('New Device Login', user.email);
};

const logout = catchAsync(async (req, res) => {
    if (req.cookies.rt !== undefined) {
        const payload = tokenService.isValidToken(req.cookies.rt);
        if (payload !== null) {
            const user = await userController.getUser(payload.uid);
            tokenService.deleteRefreshToken(user, req.cookies.rt);
        }
    }
    res.clearCookie('rt');
    res.clearCookie('at');
    res.send({ status: true });
});

const authenticate = catchAsync(async (req, res) => {
    const user = await userController.getUser(req.body);
    if (!user) {
        // user not found
        return res.status(httpStatus.NOT_FOUND).send({
            code: 101,
            message: 'Unknown user, Please signup before login',
        });
    }

    // check if payment is done
    if (!userService.isSubscriptionActive(user)) {
        return res.status(httpStatus.OK).send(errorCode[104]);
    }

    const accessToken = req.cookies.at;
    const refreshToken = req.cookies.rt;

    const refreshPayload =
        refreshToken && tokenService.isValidToken(refreshToken);
    const accessPayload =
        refreshToken && tokenService.isValidToken(accessToken);

    if (accessToken === undefined) {
        if (refreshToken === undefined) {
            // New device or New User
            return user && signUp(res, user)
                ? res.send({ status: true })
                : res.send({ status: false });
        }
        if (refreshPayload === null) {
            // invalid Refresh token and undefined Access token
            return relogin(res);
        }
        // valid refreshToken, undefined Access token
        tokenService.generateAccessTokens(res, { email: refreshPayload.uid });
    } else {
        if (accessPayload) {
            // valid access token
            const result = userController.getUser(accessPayload.uid);
            if (!result)
                return relogin(res, 'Unknow token, needs authentication');
            return res.status(httpStatus.OK).send({ status: true });
        }
        // invalid Access token
        if (refreshToken !== undefined) {
            if (refreshPayload === null) {
                return relogin(res);
            }
            tokenService.generateAccessTokens(res, {
                email: refreshPayload.uid,
            });
        } else {
            return relogin(res);
        }
    }
    return res.send({ status: true });
});

const reset = catchAsync(async (req, res) => {
    const user = await userController.getUser(req.body);
    if (!user) {
        return res
            .status(httpStatus.NOT_FOUND)
            .send({ message: 'user not found' });
    }
    if (user.providerId !== EMAIL) {
        return res
            .status(httpStatus.NOT_FOUND)
            .send({ message: `You have signed up with ${user.providerId}` });
    }
    const token = tokenService.generateVerificationTokens({
        email: user.email,
    });
    await userService.setResetURL(user.email, token);
    const payload = {
        redirecturl: constructResetUrl(token),
        name: user.name ? user.name : '',
    };
    const result = sendMail(payload, RESET.name, user.email);
    return res.status(httpStatus.OK).send(result);
});

const verify = catchAsync(async (req, res) => {
    const token = req.params.id;
    const { email = {} } = tokenService.isValidToken(token);
    const result = await userService.verifyResetURL(email, token);
    return res.status(httpStatus.OK).send({ result, email });
});

const resetPass = catchAsync(async (req, res) => {
    const { token, pass } = req.body;
    const { email } = tokenService.isValidToken(token);
    const result = await userService.verifyResetURL(email, token);
    const updated =
        result &&
        (await userService.updatePass(email, pass)) !== (null || undefined);
    if (updated) {
        userService.setResetURL(email, undefined);
    }
    return res.status(httpStatus.OK).send({ email, updated });
});

const verifyPass = catchAsync(async (req, res, next) => {
    const { email, pass } = req.body;
    if (email === '' || pass === '') {
        return res.status(httpStatus.NOT_FOUND).send({
            ...errorCode[103],
        });
    }
    const user = await userService.getUserByFilter({ email });
    if (!user) {
        return res.status(httpStatus.OK).send({
            message: `${email} not found, please signup`,
            error: errorCode[101],
        });
    }
    if (user.providerId !== 'EMAIL') {
        // if its not a email provider, skip the password match
        return next();
    }
    const result = await user.isPasswordMatch(pass, user.pass);
    if (result) {
        // if password is a match, call on authenticate
        return next();
    }
    return res.status(httpStatus.NOT_FOUND).send({
        message: `email or password mismatch`,
        error: errorCode[102],
    });
});

module.exports = {
    logout,
    authenticate,
    signUp,
    reset,
    verify,
    resetPass,
    verifyPass,
};
