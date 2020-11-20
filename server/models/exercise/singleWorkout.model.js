const { Schema } = require('mongoose');
const Sets = require('./sets.model');

const sets = new Schema({
    id: {
        type: String,
        required: true,
    },
    settings: {
        rest: {
            type: Number,
        },
        sets: [Sets],
    },
    superSet: {
        type: String,
    },
    url: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    main_muscle_grp: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    equipment: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    mechanics: {
        type: String,
        required: true,
    },
    other_muscle_grp: {
        type: String,
        required: true,
    },
    detailed_muscle_group: {
        type: String,
        required: true,
    },
    steps: {
        type: String,
        required: true,
    },
});

module.exports = sets;
