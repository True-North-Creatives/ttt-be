const express = require("express");
const authRoutes = require("./auth");

const router = express.Router();

router.use("./login", authRoutes);

module.exports = router;
