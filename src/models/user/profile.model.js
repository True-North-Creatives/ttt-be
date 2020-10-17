const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

mongoose.set('useFindAndModify', false);
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    height: {
        type: String,
        required: true,
    },
    bodyMeasurements: {
        weight: {
            type: String,
        },
        fat: {
            type: String,
        },
        waist: {
            type: String,
        },
        chest: {
            type: String,
        },
        hip: {
            type: String,
        },
        quad: {
            type: String,
        },
        leftBicep: {
            type: String,
        },
        rightBicep: {
            type: String,
        },
        leftForeArm: {
            type: String,
        },
        rightForeArm: {
            type: String,
        },
        leftThigh: {
            type: String,
        },
        rightThigh: {
            type: String,
        },
        leftCalf: {
            type: String,
        },
        rightCalf: {
            type: String,
        },
        shoulder: {
            type: String,
        },
    },
    dailySleep: {
        type: String,
        required: true,
    },
    diet: {
        cusine: {
            type: String,
            required: true,
        },
        allergies: {
            type: [String],
        },
    },
});

ProfileSchema.plugin(toJSON);
const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;
