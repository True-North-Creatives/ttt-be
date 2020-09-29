const express = require("express");

const router = express.Router();

const authenticator = require("../../../controllers/auth/token.controller");
const userController = require("../../../controllers/user/user.controller");
const authorize = require("../../../middlewares/auth");
const { route } = require("../../../config/roles");

router.get("/signin", authenticator.authenticate);

router.post("/logout", authenticator.logout);

router.get(
  "/user_exists",
  authorize(route.USER_EXISTS),
  userController.isEmailTaken
);

router.post("/signup", userController.createUser);

module.exports = router;
