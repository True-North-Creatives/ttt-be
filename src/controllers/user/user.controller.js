const httpStatus = require('http-status');
const logger = require('../../config/logger');
const catchAsync = require('../../utils/catchAsync');
const userService = require('../../services/user/user.service');
const { ROLES } = require('../../config/roles');
const { sendMail } = require('../../services/mail');
const { constructActivateUrl } = require('../../utils/helpers');
const tokenService = require('../../services/auth/token.service');

const createUser = catchAsync(async (req, res) => {
    const payload = req.body;
    if (payload.providerId === 'EMAIL') {
        const token = tokenService.generateVerificationTokens({
            email: payload.email,
        });
        payload.resetURL = token;
    }

    const user = await userService.createUser(payload);
    if (payload.providerId !== 'EMAIL') {
        return res.status(httpStatus.CREATED).send(payload);
    }

    //   /**
    //    * @todo
    //    * Use token controller to singup
    //    */
    //   const { refreshToken } = tokenService.generateTokens(res, {
    //     email: user.email,
    //   });
    //   tokenService.updateRefreshToken(user, refreshToken);
    logger.info('New User Signup', user.email);

    const mailStatus = await sendMail(
        {
            redirecturl: constructActivateUrl(payload.resetURL),
        },
        'ACTIVATE',
        user.email
    );
    logger.info(`Mail Status:${JSON.stringify(mailStatus)}`);
    return res.status(httpStatus.CREATED).send(payload);
});

const findOrCreate = async ({ imageUrl, email, givenName, familyName }) => {
    let user = await userService.getUserByFilter({ email });
    if (!user) {
        const payload = {
            fname: givenName,
            lname: familyName,
            photo: imageUrl,
            email,
            role: [ROLES.Default],
            online: true,
        };
        logger.info('Creating new user', payload.email);
        user = await userService.createUser(payload);
    }
    return user;
};

const getUser = async ({ email }) => {
    const user = await userService.getUserByFilter({ email });
    return user;
};

const getAllUsers = async (req, res) => {
    const user = await userService.getAllUsers();
    res.status(httpStatus.CREATED).send(user);
};

const isEmailTaken = async (req, res) => {
    const present = await userService.userPresent(req.body.email);
    return res.status(httpStatus.OK).send(present);
};

module.exports = {
    createUser,
    getUser,
    findOrCreate,
    isEmailTaken,
    getAllUsers,
};
