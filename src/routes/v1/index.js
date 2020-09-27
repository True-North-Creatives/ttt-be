const express = require("express");
const exerciseRoutes = require("./exercise");
const userRoutes = require("./user");
const dietRoutes = require("./diet");
const paymentRoutes = require("./payment");
const authRoutes = require("./auth");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/exercise", exerciseRoutes);
router.use("/diet", dietRoutes);
router.use("/payment", paymentRoutes);
router.use("/auth", authRoutes);

module.exports = router;
