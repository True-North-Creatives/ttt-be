const httpStatus = require("http-status");

const catchAsync = require("../../utils/catchAsync");
const userService = require("../../services/user/user.service");

const addUser = catchAsync(async (req, res) => {
  const user = await userService.addUser(req.body);
  res.status(httpStatus.OK).send(user);
});

const getAllUsers = catchAsync(async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(httpStatus.OK).send(users);
});

module.exports = {
  addUser,
  getAllUsers,
};
