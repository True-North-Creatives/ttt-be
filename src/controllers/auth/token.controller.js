const httpStatus = require("http-status");
const logger = require("../../config/logger");
const catchAsync = require("../../utils/catchAsync");
const userController = require("../user/user.controller");
const tokenService = require("../../services/auth/token.service");

const relogin = (res, message = "Login Expired, Please login") => {
  res.clearCookie("rt");
  res.clearCookie("at");
  logger.warn("Relogin");
  return res.status(httpStatus.OK).json({ message, status: false });
};

const signUp = async (res, user) => {
  const { refreshToken } = tokenService.generateTokens(res, {
    email: user.email,
    role: user.role,
  });
  tokenService.updateRefreshToken(user, refreshToken);
  logger.info("New Device Login", user.email);
};

const logout = catchAsync(async (req, res) => {
  if (req.cookies.rt !== undefined) {
    const payload = tokenService.isValidToken(req.cookies.rt);
    if (payload !== null) {
      const user = await userController.getUser(payload.uid);
      tokenService.deleteRefreshToken(user, req.cookies.rt);
    }
  }
  res.clearCookie("rt");
  res.clearCookie("at");
  res.send({ status: true });
});

const authenticate = catchAsync(async (req, res) => {
  const accessToken = req.cookies.at;
  const refreshToken = req.cookies.rt;

  const refreshPayload =
    refreshToken && tokenService.isValidToken(refreshToken);
  const accessPayload = refreshToken && tokenService.isValidToken(accessToken);

  if (accessToken === undefined) {
    if (refreshToken === undefined) {
      // New device or New User
      const user = await userController.getUser(req.query);
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
      const user = userController.getUser(accessPayload.uid);
      if (!user) return relogin(res, "Unknow token, needs authentication");
      return res.status(httpStatus.OK).send({ status: true });
    }
    // invalid Access token
    if (refreshToken !== undefined) {
      if (refreshPayload === null) {
        return relogin(res);
      }
      tokenService.generateAccessTokens(res, { email: refreshPayload.uid });
    } else {
      return relogin(res);
    }
  }
  return res.send({ status: true });
});

module.exports = {
  logout,
  authenticate,
  signUp,
};
