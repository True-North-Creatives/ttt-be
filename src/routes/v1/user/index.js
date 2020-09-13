/* eslint-disable prettier/prettier */
const express = require('express');

const router = express.Router();
const profileRoutes = require('./profile');
const userRoutes = require('./profile');

router.use('/profile', profileRoutes);
router.use('/', userRoutes);

module.exports = router;