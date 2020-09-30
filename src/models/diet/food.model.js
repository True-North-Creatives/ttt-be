const mongoose = require("mongoose");
const { toJSON } = require("../plugins");

const foodSchema = new mongoose.Schema(
  {
    ingredient: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    food: {
      type: String,
      required: true,
    },
    fat: {
      type: Number,
      required: true,
    },
    protein: {
      type: Number,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    carb: {
      type: Number,
      required: true,
    },
    units: {
      type: String,
      required: true,
    },
    conversion: {
      type: Number,
      required: true,
    },
    substitute: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "food",
      },
    ],
  },
  { collection: "food" }
);

foodSchema.plugin(toJSON);

const foods = mongoose.model("food", foodSchema);

module.exports = foods;
