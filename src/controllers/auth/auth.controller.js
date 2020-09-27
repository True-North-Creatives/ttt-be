const catchAsync = require("../../utils/catchAsync");
const loginService = require("../../utils/auth");

const login = catchAsync(async (req, res) => {
  const { token, refreshToken } = await loginService.login(req.body);

  res.cookie("tokens", { token, refreshToken });
});

module.exports = { login };
