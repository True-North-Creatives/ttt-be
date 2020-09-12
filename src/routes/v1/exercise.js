/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();

// validation middleware
const {validateExerciseFeilds} = require('../../middlewares/exerciseValidation');

// conrollers
const createExercise = require('../../controllers/exerciseCongtroller');
const updateExercise = require('../../controllers/exerciseCongtroller');
const getAllExercises = require('../../controllers/exerciseCongtroller');
const deleteExercise = require('../../controllers/exerciseCongtroller');

// create an exercise
router.post('/',validateExerciseFeilds, createExercise);

// update exersise 
router.put('/:id',validateExerciseFeilds, updateExercise)

// get all exercises
router.get('/all', getAllExercises);

// delete an exercise
router.delete('/:id', deleteExercise);

module.exports = router;

