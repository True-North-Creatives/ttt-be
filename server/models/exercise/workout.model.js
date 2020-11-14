const { Schema } = require('mongoose');
const SingleWorkout = require('./singleWorkout.model');

const sets = new Schema({
    id: {
        type: String,
        required: true,
    },

    main: {
        type: Object,
        required: true,
        ...SingleWorkout,
    },
    sub: [SingleWorkout],
});

module.exports = sets;
