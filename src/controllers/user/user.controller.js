const httpStatus = require("http-status");
const logger = require("../../config/logger");
const catchAsync = require("../../utils/catchAsync");
const userService = require("../../services/user/user.service");
const { ROLES } = require("../../config/roles");
const tokenService = require("../../services/auth/token.service");

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  /**
   * @todo
   * Use token controller to singup
   */
  const { refreshToken } = tokenService.generateTokens(res, {
    email: user.email,
  });
  tokenService.updateRefreshToken(user, refreshToken);
  logger.info("New Device or New User Login", user.email);
  const payload = {
    fname: user.fname,
    email: user.email,
  };
  res.status(httpStatus.CREATED).send(payload);
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
    logger.info("Creating new user", payload.email);
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
