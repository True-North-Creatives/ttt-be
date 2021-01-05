const express = require('express');
const exerciseRoutes = require('./exercise');
const userRoutes = require('./user');
const dietRoutes = require('./diet');
const paymentRoutes = require('./payment');
const authRoutes = require('./auth');

const setRoutes = require('./sets');

const bodyStats = require('./bodyStats');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/exercise', exerciseRoutes);
router.use('/diet', dietRoutes);
router.use('/payment', paymentRoutes);
router.use('/auth', authRoutes);
router.use('/sets', setRoutes);
router.use('/bodyStats', bodyStats);

module.exports = router;
