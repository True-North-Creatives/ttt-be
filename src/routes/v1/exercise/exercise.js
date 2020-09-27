const express = require("express");
const validate = require("../../../middlewares/validate");
const exerciseValidation = require("../../../validations/exercises.validation");

const router = express.Router();
const authorize = require("../../../middlewares/auth");
const { route } = require("../../../config/roles");
const exercisesController = require("../../../controllers/exercises/exercises.controller");

// create an exercise
router.post(
  "/",
  authorize(route.ADD_EXERCISE),
  validate(exerciseValidation.addExercise),
  exercisesController.addExercise
);

// update exersise
router.put(
  "/",
  authorize(route.UPDATE_EXERCISE),
  validate(exerciseValidation.updateExercise),
  exercisesController.updateExercise
);

// get all exercises
router.get(
  "/",
  authorize(route.GET_EXERCISES),
  exercisesController.getExercises
);

// delete an exercise
router.delete(
  "/:id",
  authorize(route.DELETE_EXERCISE),
  exercisesController.deleteExercise
);

module.exports = router;
