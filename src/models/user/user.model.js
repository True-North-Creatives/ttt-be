const mongoose = require("mongoose");
const validator = require("validator");
const { toJSON, paginate } = require("../plugins");

mongoose.set("useFindAndModify", false);
const userSchema = new mongoose.Schema(
  {
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
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    age: {
      type: Number,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    // On Successful SignUp
    dateJoined: {
      type: Date,
      default: Date.now,
    },
    // subscriptionType: monthly, annually
    subscriptionType: {
      type: String,
      required: true,
    },
    // On Payment Success make isSubscribed as true
    isSubscribed: {
      type: Boolean,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    // SignedInUsing: Google, Facebook
    SignedInUsing: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    role: {
      type: Array,
    },
  },
  {
    collection: "users",
  }
);

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
