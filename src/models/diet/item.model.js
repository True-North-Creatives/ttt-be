const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const item = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'food',
    },
    qty: {
        type: Number,
        required: true,
    },
});

module.exports = item;
