/* eslint-disable prettier/prettier */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  plan: {
    type: String,
    required: true,
  },
  subscription: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
