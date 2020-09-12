const express = require("express");
const dietRoutes = require("../../../controllers/diet/planner.controller");
const validate = require("../../../middlewares/validate");
const mealPlanValidation = require("../../../validations/mealplan.validation");

const router = express.Router();

// Add data
router.post(
  "/",
  validate(mealPlanValidation.createDayPlan),
  dietRoutes.createPlan
);

// update - replace full data
router.put("/", validate(mealPlanValidation.updatePlan), dietRoutes.updatePlan);

// if id is passed in url
router.get(
  "/:id",
  validate(mealPlanValidation.getDayPlanById),
  dietRoutes.getPlanById
);

// if week and category is passed in query
router.get("/", validate(mealPlanValidation.getDayPlan), dietRoutes.getPlan);

module.exports = router;
