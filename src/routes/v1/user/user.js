const express = require("express");
const { authorize } = require("../../../middlewares/auth");

const router = express.Router();

// controllers
const userController = require("../../../controllers/user/user.controller");

// dummy route to add users to db
router.post("/", userController.addUser);

// get all users
router.get(
  "/get_users",
  authorize("manager", "admin"),
  userController.getAllUsers
);

module.exports = router;
