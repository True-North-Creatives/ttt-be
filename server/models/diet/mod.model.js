const mongoose = require('mongoose');
const { toJSON } = require('../plugins');
const DayPlan = require('./dayplan.model');
const { MOD_PLANS } = require('../../utils/contants');

const modSchema = (collection) =>
    mongoose.Schema(
        {
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
            collection,
        }
    );

// add plugin that converts mongoose to json
modSchema().plugin(toJSON);

const ret = {};

Object.keys(MOD_PLANS).forEach((mod) => {
    ret[MOD_PLANS[mod].collection] = mongoose.model(
        MOD_PLANS[mod].collection,
        modSchema(MOD_PLANS[mod].collection)
    );
});

module.exports = {
    ...ret,
};
