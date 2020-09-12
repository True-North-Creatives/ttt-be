/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");
const ExerciseSchema = new mongoose.Schema({
  URL: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  MainMuscleGroup: {
    type: String,
    required: true,
  },
  OtherMuscleGroups: {
    type: String,
    required: true,
  },
  DetailedMuscleGroup: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Mechanics: {
    type: String,
    required: true,
  },
  Equipment: {
    type: String,
    required: true,
  },
  Difficulty: {
    type: String,
    required: true,
  },
  HowToPerformExercise: {
    type: String,
    required: true,
  },
},{collection: 'exercises'});

module.exports = Exercises = mongoose.model("exercises", ExerciseSchema);
