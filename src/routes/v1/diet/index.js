const express = require("express");
const plannerRoutes = require("./planner");
const statusRoutes = require("./status");
const menuRoutes = require("./menu");

const router = express.Router();

router.use("/planner", plannerRoutes);
router.use("/status", statusRoutes);
router.use("/menu", menuRoutes);
module.exports = router;
