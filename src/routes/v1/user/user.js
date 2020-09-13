/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

// controllers
const userController = require('../../../controllers/user/user.controller');

// dummy route to add users to db
router.post('/',userController.addUser);

// get all users
router.get('/get_users',userController.getAllUsers);

module.exports = router;