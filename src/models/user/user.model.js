const mongoose = require("mongoose");
const { toJSON } = require("../plugins");

mongoose.set("useFindAndModify", false);
const UserSchema = new mongoose.Schema({
  payment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "payment",
    },
  ],
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: false,
  },
  profileImageUrl: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  subscriptionType: {
    type: String,
    required: true,
  },
  isSubscribed: {
    type: Boolean,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  SignedInUsing: {
    type: String,
    required: true,
  },
});

UserSchema.plugin(toJSON);
const User = mongoose.model("user", UserSchema);

module.exports = User;
