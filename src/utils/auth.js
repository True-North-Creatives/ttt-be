const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user/user.model");
const ApiError = require("./ApiError");

const login = async (payload) => {
  const { email } = payload;
  const user = await UserModel.findOne({ email });
  if (!user) throw new ApiError(httpStatus.UNAUTHORIZED, "No Users found");
  const username = {
    email,
  };
  const token = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  const refreshToken = jwt.sign(username, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });

  user.refreshToken = refreshToken;
  await user.save();
  return { token, refreshToken };
};

module.exports = {
  login,
};
