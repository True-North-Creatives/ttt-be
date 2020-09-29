const httpStatus = require("http-status");
const ExerciseModel = require("../../models/exercise/exercises.model");
const ApiError = require("../../utils/ApiError");

const addExercise = async (payload) => {
  const { title } = payload;

  let exercise = await ExerciseModel.findOne({ title });
  if (exercise)
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Exercise exists");

  exercise = new ExerciseModel(payload);
  await exercise.save();
  return exercise;
};

const updateExercise = async (payload) => {
  const exercise = await ExerciseModel.findByIdAndUpdate(payload.id, {
    ...payload,
  });
  return exercise;
};

const getExercises = async () => {
  const exercises = await ExerciseModel.find().exec();
  const equpiment = await ExerciseModel.find().distinct("equipment").exec();
  const muscle = await ExerciseModel.find().distinct("main_muscle_grp").exec();
  if (!exercises || exercises.length === 0)
    throw new ApiError(httpStatus.NOT_FOUND, "Exercises not found");
  return { equpiment, muscle, exercises };
};

const deleteExercise = async ({ id }) => {
  const exercise = await ExerciseModel.findByIdAndRemove(id);
  if (!exercise) throw new ApiError(httpStatus.NOT_FOUND, "Exercise not found");
  return exercise;
};

const getExerciseById = async (id) => {
  const exercise = await ExerciseModel.findById(id).exec();
  if (!exercise || exercise.length === 0)
    throw new ApiError(httpStatus.NOT_FOUND, "Exercises not found");
  return exercise;
};

module.exports = {
  addExercise,
  updateExercise,
  getExercises,
  deleteExercise,
  getExerciseById,
};
