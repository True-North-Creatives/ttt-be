const express = require("express");
const validate = require("../../../middlewares/validate");
const exerciseValidation = require("../../../validations/exercises.validation");
const { authorize } = require("../../../middlewares/auth");

const router = express.Router();

const exercisesController = require("../../../controllers/exercises/exercises.controller");

// create an exercise
router.post(
  "/",
  [
    authorize("manager", "admin", "trainer"),
    validate(exerciseValidation.addExercise),
  ],
  exercisesController.addExercise
);

// update exersise
router.put(
  "/",
  [
    authorize("manager", "admin", "trainer"),
    validate(exerciseValidation.updateExercise),
  ],
  exercisesController.updateExercise
);

// get all exercises
router.get(
  "/",
  authorize("manager", "admin", "trainer", "user"),
  exercisesController.getExercises
);

// delete an exercise
router.delete(
  "/:id",
  authorize("manager", "admin", "trainer"),
  exercisesController.deleteExercise
);

module.exports = router;
