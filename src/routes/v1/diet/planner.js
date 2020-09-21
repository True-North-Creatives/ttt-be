const express = require("express");
const dietRoutes = require("../../../controllers/diet/planner.controller");
const validate = require("../../../middlewares/validate");
const mealPlanValidation = require("../../../validations/mealplan.validation");
const { authorize } = require("../../../middlewares/auth");

const router = express.Router();

// Add data
router.post(
  "/",
  [
    authorize("manager", "admin", "nutritioner"),
    validate(mealPlanValidation.createDayPlan),
  ],
  dietRoutes.createPlan
);

// update - replace full data
router.put(
  "/",
  [
    authorize("manager", "admin", "nutritioner"),
    validate(mealPlanValidation.updatePlan),
  ],
  dietRoutes.updatePlan
);

// if id is passed in url
router.get(
  "/:id",
  [
    authorize("manager", "admin", "nutritioner", "user"),
    validate(mealPlanValidation.getDayPlanById),
  ],
  dietRoutes.getPlanById
);

// if week and category is passed in query
router.get(
  "/",
  [
    authorize("manager", "admin", "nutritioner", "user"),
    validate(mealPlanValidation.getDayPlan),
  ],
  dietRoutes.getPlan
);

module.exports = router;
