const mongoose = require("mongoose");
const { toJSON } = require("../plugins");

const ExerciseSchema = new mongoose.Schema(
  {
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
  },
  { collection: "exercises" }
);

ExerciseSchema.plugin(toJSON);

const Exercises = mongoose.model("exercises", ExerciseSchema);

module.exports = Exercises;
