const { Schema } = require('mongoose');

const day = new Schema({
    name: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        required: true,
    },
    disabled: {
        type: Boolean,
        required: true,
    },
});

module.exports = day;
