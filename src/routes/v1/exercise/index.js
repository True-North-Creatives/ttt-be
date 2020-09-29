const express = require("express");

const router = express.Router();
const exerciseRoutes = require("./exercise");
const workoutRoutes = require("./workout");

router.use("/workout", workoutRoutes);
router.use("/", exerciseRoutes);

module.exports = router;
