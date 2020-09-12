const express = require("express");
const plannerRoutes = require("./planner");
const statusRoutes = require("./status");

const router = express.Router();

router.use("/planner", plannerRoutes);
router.use("/status", statusRoutes);
module.exports = router;
