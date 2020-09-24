const express = require("express");
const validate = require("../../../middlewares/validate");
const workoutValidation = require("../../../validations/workout.validation");
const workoutStatusValidation = require("../../../validations/workout_status.validation");

const router = express.Router();

const workoutController = require("../../../controllers/exercises/workout.controller");

// create an exercise
router.post(
  "/",
  validate(workoutValidation.addWOD),
  workoutController.addWorkout
);

// get WOD of a given day

router.get(
  "/:id/:collection",
  validate(workoutValidation.getWODById),
  workoutController.getWODById
);

router.get("/", validate(workoutValidation.getWOD), workoutController.getWOD);

router.get(
  "/status",
  validate(workoutStatusValidation.getStatus),
  workoutController.getStatus
);

router.post(
  "/status",
  validate(workoutStatusValidation.updateStatus),
  workoutController.updateStatus
);

module.exports = router;
