/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const {check} = require('express-validator');

const validateExerciseFeilds = [
    check('URL','URL is required').not().isEmpty(),
    check('Title', 'Title is required').not().isEmpty(),
    check('MainMuscleGroup', 'MainMuscleGroup is required').not().isEmpty(),
    check('Type', 'Type is required').not().isEmpty(),
    check('Equipment', 'Equipment is required').not().isEmpty(),
    check('Difficulty','Difficulty is required').not().isEmpty(),
    check('HowToPerformExercise', 'HowToPerformExercise is required').not().isEmpty()
];

module.exports = {
    validateExerciseFeilds
}
