const httpStatus = require("http-status");

const ApiError = require("../utils/ApiError");

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return new ApiError(
        httpStatus.FORBIDDEN,
        "This User not is not authorized to access this route"
      );
    }
    next();
  };
};

module.exports = { authorize };
