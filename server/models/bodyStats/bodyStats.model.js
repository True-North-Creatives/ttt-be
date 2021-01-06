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
        value: {
            type: Number,
            required: true,
        },
        unit: {
            type: String,
            required: true,
            enum: ['kg', 'cm', '%'],
        },
        conversion: {
            type: String,
            required: true,
            enum: ['lb', 'inch'],
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

BodyStats.index({
    user: 1,
    date: 1,
    'stats.id': 1,
});

module.exports = mongoose.model('BodyStats', BodyStats);
