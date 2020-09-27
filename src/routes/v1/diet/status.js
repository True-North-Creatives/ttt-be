const express = require("express");
const statusController = require("../../../controllers/diet/status.controller");
const validate = require("../../../middlewares/validate");
const mealPlanStatusValidation = require("../../../validations/mealPlanStatus.validation");
const authorize = require("../../../middlewares/auth");
const { route } = require("../../../config/roles");

const router = express.Router();

/**
 * No Post here, since the status is added to DB with the mealPlan payload
 */

// update status
router.put(
  "/",
  authorize(route.UPDATE_MOD_STATUS),
  validate(mealPlanStatusValidation.updateStatus),
  statusController.updateStatus
);

// get status
router.get(
  "/",
  authorize(route.GET_MOD_STATUS),
  validate(mealPlanStatusValidation.getAllStatus),
  statusController.getStatus
);

module.exports = router;
