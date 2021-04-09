
const Joi = require('joi');

const addWOD = {
    body: Joi.object().keys({
        displayName: Joi.string().required(),
        collection: Joi.string().required(),
        status: Joi.string().required(),
        date: Joi.string().required(),
        workouts: Joi.array().items({
            _id: Joi.string(),
            id: Joi.string().required(),
            main: Joi.object().keys({
                id: Joi.string().required(),
                settings: Joi.object().keys({
                    rest: Joi.number(),
                    sets: Joi.array().items({
                        choice: Joi.number().required(),
                        max: Joi.number(),
                        min: Joi.number(),
                        due: Joi.number(),
                    }),
                }),
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
                superSet: Joi.string(),
            }),
            sub: Joi.array().items({
                _id: Joi.string(),
                id: Joi.string().required(),
                settings: Joi.object().keys({
                    rest: Joi.number(),
                    sets: Joi.array().items({
                        _id: Joi.string(),
                        choice: Joi.number().required(),
                        max: Joi.number(),
                        min: Joi.number(),
                        due: Joi.number(),
                    }),
                }),
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
        }),
    }),
};

const getWOD = {
    query: {
        date: Joi.string().required(),
        collection: Joi.string().required(),
    },
};

const getWODById = {
    param: {
        id: Joi.string().required(),
        collection: Joi.string().required(),
    },
};

const getSchedule = {
    query: {
        date: Joi.date().iso().required(),
        days: Joi.number().default(3).required(),
        collection: Joi.string().required(),
    },
};

module.exports = {
    addWOD,
    getWOD,
    getWODById,
    getSchedule,
};
