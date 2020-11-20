const { Schema } = require('mongoose');
const DaySchema = require('./days.model');
const MealSchema = require('./meal.model');

const dayPlan = new Schema({
    name: {
        type: String,
        required: true,
    },
    repeat: [DaySchema],
    meals: [MealSchema],
});

module.exports = dayPlan;
