const express = require("express");
const dietRoutes = require("./diet");

const router = express.Router();

router.use("/diet", dietRoutes);

module.exports = router;
