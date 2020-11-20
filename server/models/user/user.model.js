const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const { toJSON, paginate } = require('../plugins');

const userSchema = new mongoose.Schema(
    {
        payment: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'payment',
            },
        ],
        familyName: {
            type: String,
            required: false,
        },
        givenName: {
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: false,
        },
        imageUrl: {
            type: String,
            required: false,
        },
        resetURL: {
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
                    throw new Error('Invalid email');
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
            required: false,
        },
        // On Payment Success make isSubscribed as true
        isSubscribed: {
            type: Boolean,
            required: false,
        },
        place: {
            type: String,
            required: false,
        },
        // providerId: Google, Facebook
        providerId: {
            type: String,
            required: true,
        },
        refreshToken: {
            type: String,
            required: false,
        },
        role: {
            type: Array,
        },
        pass: {
            type: String,
            required: false,
            trim: true,
            private: true, // used by the toJSON plugin
        },
    },
    {
        collection: 'users',
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

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password, storedPass) {
    return bcrypt.compare(password, storedPass);
};

// userSchema.pre("updateOne", { document: true, query: true },async(result) => {
//     console.log(this, 'pres',result());
//     this.pass = await bcrypt.hash(this.pass, 8);
// });
const User = mongoose.model('user', userSchema);

module.exports = User;
