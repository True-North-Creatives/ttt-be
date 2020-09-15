const mongoose = require("mongoose");
const { toJSON } = require("../plugins");
const DayPlan = require("./dayplan.model");

const modSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    plans: [DayPlan],
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    week: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
modSchema.plugin(toJSON);

const mod = mongoose.model("mod", modSchema);

module.exports = mod;
