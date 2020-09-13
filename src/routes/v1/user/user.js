/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const express = require('express');
const router = express.Router();

// controllers
const addUser = require('../../../controllers/userController');
const getAllUsers = require('../../../controllers/userController');

// dummy route to add users to db
router.post('/',addUser);

// get all users
router.get('/get_users',getAllUsers);

module.exports = router;