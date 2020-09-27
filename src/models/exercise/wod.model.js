const mongoose = require("mongoose");
const { toJSON } = require("../plugins");
const Workout = require("./workout.model");
const { WOD_PLANS } = require("../../utils/contants");

const wodSchema = (collection) =>
  mongoose.Schema(
    {
      status: {
        type: String,
        required: true,
      },
      displayName: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      workouts: [Workout],
    },
    {
      timestamps: true,
      collection,
    }
  );

// add plugin that converts mongoose to json
wodSchema().plugin(toJSON);

const ret = {};
Object.keys(WOD_PLANS).forEach((wod) => {
  ret[WOD_PLANS[wod].collection] = mongoose.model(
    WOD_PLANS[wod].collection,
    wodSchema(WOD_PLANS[wod].collection)
  );
});

module.exports = {
  ...ret,
};
