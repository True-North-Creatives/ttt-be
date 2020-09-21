const express = require("express");
const statusController = require("../../../controllers/diet/status.controller");
const validate = require("../../../middlewares/validate");
const mealPlanStatusValidation = require("../../../validations/mealPlanStatus.validation");
const { authorize } = require("../../../middlewares/auth");

const router = express.Router();

/**
 * No Post here, since the status is added to DB with the mealPlan payload
 */
router.put(
  "/",
  [
    authorize("manager", "admin", "nutritioner"),
    validate(mealPlanStatusValidation.updateStatus),
  ],
  statusController.updateStatus
);

router.get(
  "/",
  [
    authorize("manager", "admin", "nutritioner", "user"),
    validate(mealPlanStatusValidation.getAllStatus),
  ],
  statusController.getStatus
);

module.exports = router;
