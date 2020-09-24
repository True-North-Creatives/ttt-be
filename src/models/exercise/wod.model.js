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
ret[WOD_PLANS.AB_WORKOUT.collection] = mongoose.model(
  WOD_PLANS.AB_WORKOUT.collection,
  wodSchema(WOD_PLANS.AB_WORKOUT.collection)
);
ret[WOD_PLANS.BODYWEIGHT_WORKOUT.collection] = mongoose.model(
  WOD_PLANS.BODYWEIGHT_WORKOUT.collection,
  wodSchema(WOD_PLANS.BODYWEIGHT_WORKOUT.collection)
);

ret[WOD_PLANS.CARDIO_WORKOUT.collection] = mongoose.model(
  WOD_PLANS.CARDIO_WORKOUT.collection,
  wodSchema(WOD_PLANS.CARDIO_WORKOUT.collection)
);
ret[WOD_PLANS.FUNCTIONAL_TRAINING.collection] = mongoose.model(
  WOD_PLANS.FUNCTIONAL_TRAINING.collection,
  wodSchema(WOD_PLANS.FUNCTIONAL_TRAINING.collection)
);
ret[WOD_PLANS.HOME_WORKOUT.collection] = mongoose.model(
  WOD_PLANS.HOME_WORKOUT.collection,
  wodSchema(WOD_PLANS.HOME_WORKOUT.collection)
);
ret[WOD_PLANS.KETTLEBELL_WORKOUT.collection] = mongoose.model(
  WOD_PLANS.KETTLEBELL_WORKOUT.collection,
  wodSchema(WOD_PLANS.KETTLEBELL_WORKOUT.collection)
);
ret[WOD_PLANS.POWERBUILDING.collection] = mongoose.model(
  WOD_PLANS.POWERBUILDING.collection,
  wodSchema(WOD_PLANS.POWERBUILDING.collection)
);

ret[WOD_PLANS.YOGA.collection] = mongoose.model(
  WOD_PLANS.YOGA.collection,
  wodSchema(WOD_PLANS.YOGA.collection)
);

module.exports = {
  ...ret,
};
