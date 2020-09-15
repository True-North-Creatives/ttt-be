const express = require("express");
const exerciseRoutes = require("./exercise");
const userRoutes = require("./user");
const dietRoutes = require("./diet");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/exercise", exerciseRoutes);
router.use("/diet", dietRoutes);

module.exports = router;
