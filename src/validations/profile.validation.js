/* eslint-disable prettier/prettier */
const Joi = require("joi");

const createProfile = {
  body: Joi.object().keys({
    user: Joi.string().required(), // here its userid
    height: Joi.string().required(),
    dailySleep: Joi.string().required(),
    diet: Joi.object({
      cusine: Joi.string().required(),
      allergies: Joi.array().required(),
    }),
  }),
};

const updateProfile = {
  body: Joi.object().keys({
    id: Joi.string().required(), // here its profileid
    height: Joi.string().required(),
    dailySleep: Joi.string().required(),
    diet: Joi.object({
      cusine: Joi.string().required(),
      allergies: Joi.array().required(),
    }),
  }),
};

const bodyProfile = {
  body: Joi.object().keys({
    id: Joi.string().required(),
    bodyMeasurements: Joi.object({
      weight: Joi.string().required(),
      fat: Joi.string().required(),
      waist: Joi.string().required(),
      chest: Joi.string().required(),
      hip: Joi.string().required(),
      quad: Joi.string().required(),
      leftBicep: Joi.string().required(),
      rightBicep: Joi.string().required(),
      leftForeArm: Joi.string().required(),
      rightForeArm: Joi.string().required(),
      leftThigh: Joi.string().required(),
      rightThigh: Joi.string().required(),
      leftCalf: Joi.string().required(),
      rightCalf: Joi.string().required(),
      shoulder: Joi.string().required(),
    }),
  }),
};

const getUserProfile = {
  param: {
    user_id: Joi.string().required(),
  },
};

module.exports = {
  createProfile,
  updateProfile,
  bodyProfile,
  getUserProfile,
};
