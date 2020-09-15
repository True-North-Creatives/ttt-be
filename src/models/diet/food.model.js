const mongoose = require("mongoose");
const { toJSON } = require("../plugins");

const foodSchema = new mongoose.Schema({
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
  carbs: {
    type: Number,
    required: true,
  },
  units: {
    type: Number,
    required: true,
  },
  conversion: {
    type: Number,
    required: true,
  },
});

foodSchema.plugin(toJSON);

const food = mongoose.model("mod", foodSchema);

module.exports = food;
