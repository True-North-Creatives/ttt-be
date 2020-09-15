const express = require("express");
const validate = require("../../../middlewares/validate");
const exerciseValidation = require("../../../validations/exercises.validation");

const router = express.Router();

const exercisesController = require("../../../controllers/exercises/exercises.controller");

// create an exercise
router.post(
  "/",
  validate(exerciseValidation.addExercise),
  exercisesController.addExercise
);

// update exersise
router.put(
  "/",
  validate(exerciseValidation.updateExercise),
  exercisesController.updateExercise
);

// get all exercises
router.get("/", exercisesController.getExercises);

// delete an exercise
router.delete("/:id", exercisesController.deleteExercise);

module.exports = router;
