/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  height: {
    type: String,
    required: true,
  },
  bodyMeasurements: {
    weight: {
      type: String,
      required: true,
    },
    fat: {
      type: String,
      required: true,
    },
    waist: {
      type: String,
      required: true,
    },
    chest: {
      type: String,
      required: true,
    },
    hip: {
      type: String,
      required: true,
    },
    quad: {
      type: String,
      required: true,
    },
    leftBicep: {
      type: String,
      required: true,
    },
    rightBicep: {
      type: String,
      required: true,
    },
    leftForeArm: {
      type: String,
      required: true,
    },
    rightForeArm: {
      type: String,
      required: true,
    },
    leftThigh: {
      type: String,
      required: true,
    },
    rightThigh: {
      type: String,
      required: true,
    },
    leftCalf: {
      type: String,
      required: true,
    },
    rightcalf: {
      type: String,
      required: true,
    },
    shoulder: {
      type: String,
      required: true,
    },
  },
  dailySleep: {
    type: String,
    required: true,
  },
  diet: {
    Cusine: {
      type: String,
      required: true,
    },
    allergies: {
      type: [String],
    },
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
