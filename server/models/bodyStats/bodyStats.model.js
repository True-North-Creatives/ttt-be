const mongoose = require('mongoose');

const uuid = require('uuid').v4;

const BodyStat = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        unit: {
            type: String,
            required: true,
        },
        units: {
            type: [String],
            required: true,
        },
    },
    { _id: false }
);

const BodyStats = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        id: {
            type: String,
            default: uuid,
        },
        stats: {
            type: [BodyStat],
            required: true,
        },
    },
    { collection: 'bodyStats' }
);

module.exports = mongoose.model('BodyStats', BodyStats);
