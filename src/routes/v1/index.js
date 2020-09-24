const express = require("express");
const exerciseRoutes = require("./exercise");
const userRoutes = require("./user");
const dietRoutes = require("./diet");
const paymentRoutes = require("./payment");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/exercise", exerciseRoutes);
router.use("/diet", dietRoutes);
router.use("/payment", paymentRoutes);

module.exports = router;
