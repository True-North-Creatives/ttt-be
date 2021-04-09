
const Joi = require('joi');

const addExercise = {
    body: Joi.object().keys({
        url: Joi.string().required(),
        title: Joi.string().required(),
        main_muscle_grp: Joi.string().required(),
        type: Joi.string().required(),
        equipment: Joi.string().required(),
        difficulty: Joi.string().required(),
        steps: Joi.string().required(),
        mechanics: Joi.string().required(),
        other_muscle_grp: Joi.string().required(),
        detailed_muscle_group: Joi.string().required(),
    }),
};

const updateExercise = {
    body: Joi.object().keys({
        id: Joi.string().required(),
        url: Joi.string().required(),
        title: Joi.string().required(),
        main_muscle_grp: Joi.string().required(),
        type: Joi.string().required(),
        equipment: Joi.string().required(),
        difficulty: Joi.string().required(),
        steps: Joi.string().required(),
        mechanics: Joi.string().required(),
        other_muscle_grp: Joi.string().required(),
        detailed_muscle_group: Joi.string().required(),
    }),
};

module.exports = {
    addExercise,
    updateExercise,
};
