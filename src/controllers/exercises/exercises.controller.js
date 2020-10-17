const httpStatus = require('http-status');

const catchAsync = require('../../utils/catchAsync');
const exercisesService = require('../../services/exercises/exercises.service');

const addExercise = catchAsync(async (req, res) => {
    const exercise = await exercisesService.addExercise(req.body);
    res.status(httpStatus.OK).send(exercise);
});

const updateExercise = catchAsync(async (req, res) => {
    const exercise = await exercisesService.updateExercise(req.body);
    res.status(httpStatus.OK).send(exercise);
});

const getExercises = catchAsync(async (req, res) => {
    const exercises = await exercisesService.getExercises();
    res.status(httpStatus.OK).send(exercises);
});

const deleteExercise = catchAsync(async (req, res) => {
    const exercise = await exercisesService.deleteExercise(req.params);
    res.status(httpStatus.OK).send(exercise);
});

module.exports = {
    addExercise,
    updateExercise,
    getExercises,
    deleteExercise,
};
