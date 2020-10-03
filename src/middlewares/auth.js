// const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const { roleRights } = require("../config/roles");

const getRoles = (req) => {
  const refreshToken = req.cookies.rt;
  const payload = jwt.decode(refreshToken);
  return payload ? payload.role : [];
};

const authorize = (route) => (req, res, next) => {
  if (
    getRoles(req).filter((role) => roleRights.get(role).includes(route))
      .length === 0
  ) {
    // return res
    //   .status(httpStatus.UNAUTHORIZED)
    //   .send({ message: "Action unauthorized" });
  }
  return next();
};

module.exports = authorize;
