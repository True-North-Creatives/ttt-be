const Joi = require('joi');

const addSet = {
    body: Joi.object().keys({
        user: Joi.string().required(),
        workout: Joi.string().required(),
        date: Joi.string().isoDate().required(),
        set: Joi.object().keys({
            reps: Joi.number().required(),
            weight: Joi.number().required(),
            exercise: Joi.string().required(),
            id: Joi.string(),
            unit: Joi.string().equal('kg', 'lb'),
        }),
    }),
};

const getSets = {
    query: Joi.object().keys({
        user: Joi.string().required(),
        workout: Joi.string().required(),
        date: Joi.string().isoDate().required(),
        group: Joi.string(),
    }),
};

module.exports = {
    addSet,
    getSets,
};
