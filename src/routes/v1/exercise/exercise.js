/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

// validation middleware
const validate = require('../../../middlewares/validate');
const exerciseValidation = require('../../../validations/exercises.validation');

// controllers
const exercisesController = require('../../../controllers/exercises/exercises.controller');

// create an exercise
router.post('/',validate(exerciseValidation.addExercise), exercisesController.addExercise);

// update exersise 
router.put('/',validate(exerciseValidation.updateExercise), exercisesController.updateExercise);

// get all exercises
router.get('/', exercisesController.getExercises);

// delete an exercise
router.delete('/:id', exercisesController.deleteExercise);

module.exports = router;

