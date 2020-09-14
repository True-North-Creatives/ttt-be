/* eslint-disable prettier/prettier */
const Joi = require("joi");

const addExercise = {
  body: Joi.object().keys({
    URL: Joi.string().required(),
    Title: Joi.string().required(),
    MainMuscleGroup: Joi.string().required(),
    Type: Joi.string().required(),
    Equipment: Joi.string().required(),
    Difficulty: Joi.string().required(),
    HowToPerformExercise: Joi.string().required(),
    Mechanics: Joi.string().required(),
    OtherMuscleGroups: Joi.string().required(),
    DetailedMuscleGroup: Joi.string().required(),
  }),
};

const updateExercise = {
  body: Joi.object().keys({
    id: Joi.string().required(),
    URL: Joi.string().required(),
    Title: Joi.string().required(),
    MainMuscleGroup: Joi.string().required(),
    Type: Joi.string().required(),
    Equipment: Joi.string().required(),
    Difficulty: Joi.string().required(),
    HowToPerformExercise: Joi.string().required(),
    Mechanics: Joi.string().required(),
    OtherMuscleGroups: Joi.string().required(),
    DetailedMuscleGroup: Joi.string().required(),
  }),
};

module.exports = {
  addExercise,
  updateExercise,
};
