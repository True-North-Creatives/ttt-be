const jwt = require("jsonwebtoken");
const userService = require("../user/user.service");
const config = require("../../config/config");

/**
 * Update the refresh token in user profile
 * @param {Object} user
 * @param {Object} token
 */

const updateRefreshToken = async (user, token) => {
  const updatedUser = await userService.updateUser(user.email, token);
  return updatedUser;
};

/**
 *
 * @param {Object} user
 * @param {Object} token
 */

const deleteRefreshToken = async (user, token) => {
  const index = user.refreshToken.indexOf(token);
  if (index > -1) {
    user.refreshToken.splice(index, 1);
  }
  const updatedUser = await userService.updateUser(user.email, user);
  return updatedUser;
};

const generateAccessTokens = (res, data) => {
  const accessToken = jwt.sign(
    { uid: data.email, role: data.role },
    config.jwt.secret,
    {
      expiresIn: "60m",
    }
  );
  res.cookie("at", accessToken, { maxAge: 1000 * 60 * 60, httpOnly: true });
  return accessToken;
};

const generateRefreshTokens = (res, data) => {
  const refreshToken = jwt.sign(
    { uid: data.email, role: data.role },
    config.jwt.secret,
    {
      expiresIn: "14 days",
    }
  );
  res.cookie("rt", refreshToken, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  });
  return refreshToken;
};

const generateTokens = (res, data) => {
  const accessToken = generateAccessTokens(res, data);
  const refreshToken = generateRefreshTokens(res, data);
  return { accessToken, refreshToken };
};

const isValidToken = (token) => {
  try {
    return jwt.verify(token, config.jwt.secret);
  } catch (e) {
    return null;
  }
};

module.exports = {
  updateRefreshToken,
  deleteRefreshToken,
  generateTokens,
  generateAccessTokens,
  generateRefreshTokens,
  isValidToken,
};
