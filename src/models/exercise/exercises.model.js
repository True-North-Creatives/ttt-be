const mongoose = require("mongoose");
const { toJSON } = require("../plugins");

const ExerciseSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    main_muscle_grp: {
      type: String,
      required: true,
    },
    other_muscle_grp: {
      type: String,
      required: true,
    },
    detailed_muscle_group: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    mechanics: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    steps: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ExerciseSchema.plugin(toJSON);

const Exercises = mongoose.model("exercise", ExerciseSchema);

module.exports = Exercises;
