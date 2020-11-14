const { Schema } = require('mongoose');

const sets = new Schema({
    choice: {
        type: Number,
        required: true,
    },
    max: {
        type: Number,
    },
    min: {
        type: Number,
    },
    due: {
        type: Number,
    },
});

module.exports = sets;
