/* eslint-disable prettier/prettier */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */

const express = require("express");
const router = express.Router();

const exerciseRoutes = require('./exercise');
const userRoutes = require('./user');

router.use('/users',userRoutes);
router.use('/exercise', exerciseRoutes);

module.exports = router;
