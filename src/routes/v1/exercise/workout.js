const express = require('express');
const validate = require('../../../middlewares/validate');
const workoutValidation = require('../../../validations/workout.validation');
const workoutStatusValidation = require('../../../validations/workout_status.validation');
const authorize = require('../../../middlewares/auth');
const { route } = require('../../../config/roles');

const router = express.Router();

const workoutController = require('../../../controllers/exercises/workout.controller');

// create an exercise
router.post(
    '/',
    authorize(route.ADD_WOD),
    validate(workoutValidation.addWOD),
    workoutController.addWorkout
);

// get WOD of a given day

router.get(
    '/:id/:collection',
    authorize(route.GET_WOD_BY_ID),
    validate(workoutValidation.getWODById),
    workoutController.getWODById
);

router.get(
    '/',
    authorize(route.GET_WOD),
    validate(workoutValidation.getWOD),
    workoutController.getWOD
);

router.get(
    '/schedule',
    validate(workoutValidation.getSchedule),
    workoutController.getSchedule
);

router.get(
    '/status',
    authorize(route.GET_WOD_STATUS),
    validate(workoutStatusValidation.getStatus),
    workoutController.getStatus
);

router.post(
    '/status',
    authorize(route.UPDATE_WOD_STATUS),
    validate(workoutStatusValidation.updateStatus),
    workoutController.updateStatus
);

router.delete('/:id/:collection', workoutController.deleteWOD);

module.exports = router;
