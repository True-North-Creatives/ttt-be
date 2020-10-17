const express = require('express');
const dietRoutes = require('../../../controllers/diet/planner.controller');
const validate = require('../../../middlewares/validate');
const mealPlanValidation = require('../../../validations/mealplan.validation');
const authorize = require('../../../middlewares/auth');
const { route } = require('../../../config/roles');

const router = express.Router();

// Add data
router.post(
    '/',
    authorize(route.CREATE_DAY_PLAN),
    validate(mealPlanValidation.createDayPlan),
    dietRoutes.createPlan
);

// update - replace full data
router.put(
    '/',
    authorize(route.UPDATE_MOD_PLAN),
    validate(mealPlanValidation.updatePlan),
    dietRoutes.updatePlan
);

// if id is passed in url
router.get(
    '/:id/:collection',
    authorize(route.GET_DAY_PLAN_BY_ID),
    validate(mealPlanValidation.getDayPlanById),
    dietRoutes.getPlanById
);

// if week and category is passed in query
router.get(
    '/',
    authorize(route.GET_DAY_PLAN),
    validate(mealPlanValidation.getDayPlan),
    dietRoutes.getPlan
);

router.delete(
    '/:id/:collection',
    authorize(route.DELETE_DAY_PLAN_BY_ID),
    validate(mealPlanValidation.deleteDayPlanById),
    dietRoutes.deleteDayPlanById
);

module.exports = router;
