/* eslint-disable prettier/prettier */
/* eslint-disable import/newline-after-import */
/* eslint-disable prettier/prettier */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const express = require("express");
const router = express.Router();

router.use('/users',require('./user'));
router.use('/profile',require('./profile'));
router.use('/exercise', require('./exercise'));

module.exports = router;
