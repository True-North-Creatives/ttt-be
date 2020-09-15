const { Schema } = require("mongoose");

const item = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
});

module.exports = item;
