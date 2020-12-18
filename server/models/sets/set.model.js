const { Schema, model } = require('mongoose');

const { v4: uuid } = require('uuid');

const SetSchema = new Schema(
    {
        id: {
            type: String,
            default: uuid,
        },
        exercise: {
            type: String,
            required: true,
        },
        reps: {
            type: Number,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
        notes: {
            type: String,
        },
    },
    { _id: false }
);

const WorkoutSchema = new Schema(
    {
        user: {
            type: String,
            required: true,
        },
        workout: {
            type: String,
            required: true,
        },
        workoutName: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        minutes: {
            type: Number,
            default: 0,
        },
        muscle: {
            type: String,
            required: true,
        },
        unit: {
            type: String,
            default: 'kg',
        },
        sets: {
            type: [SetSchema],
            required: true,
        },
    },
    { collection: 'sets' }
);

WorkoutSchema.index({
    user: 1,
    exercise: 1,
    workout: 1,
    'sets.id': 1,
    'set.exercise': 1,
});

module.exports = model('Set', WorkoutSchema);
