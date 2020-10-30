const { Schema, model } = require('mongoose');

const SetSchema = new Schema(
    {
        id: {
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
        // unit: {
        //     type: String,
        //     required: true,
        //     enum: ['kg', 'lb'],
        // },
    },
    { _id: false }
);

const ExerciseSchema = new Schema(
    {
        exercise: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true,
        },
        workout: {
            type: String,
            required: true,
        },
        day: {
            type: Date,
            required: true,
        },
        sets: {
            type: [SetSchema],
            required: true,
        },
    },
    { collection: 'sets' }
);

ExerciseSchema.index({ user: 1, exercise: 1, workout: 1, 'sets.id': 1 });

module.exports = model('Set', ExerciseSchema);
