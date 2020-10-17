const { Schema } = require('mongoose');
const ItemSchema = require('./item.model');

const meal = new Schema({
    name: {
        type: String,
        required: true,
    },
    items: [ItemSchema],
});

module.exports = meal;
