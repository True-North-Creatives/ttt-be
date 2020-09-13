/* eslint-disable prettier/prettier */
const express = require('express');

const router = express.Router();
const exerciseRoutes = require('./exercise');

router.use('/',  exerciseRoutes);

module.exports = router;