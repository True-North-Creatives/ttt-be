/* eslint-disable prettier/prettier */
const express = require('express');
const exerciseRoutes = require('./exercise');

const router = express.Router();

router.use('/', exerciseRoutes);

module.exports = router;