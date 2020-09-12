const express = require("express");
const statusController = require("../../../controllers/diet/status.controller");
const validate = require("../../../middlewares/validate");
const mealPlanStatusValidation = require("../../../validations/mealPlanStatus.validation");

const router = express.Router();

/**
 * No Post here, since the status is added to DB with the mealPlan payload
 */
router.put(
  "/",
  validate(mealPlanStatusValidation.updateStatus),
  statusController.updateStatus
);

router.get(
  "/",
  validate(mealPlanStatusValidation.getAllStatus),
  statusController.getStatus
);

module.exports = router;
