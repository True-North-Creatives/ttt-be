const express = require("express");
const exerciseRoutes = require("./exercise");
const userRoutes = require("./user");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/exercise", exerciseRoutes);

module.exports = router;
