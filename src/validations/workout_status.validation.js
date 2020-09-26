/* eslint-disable prettier/prettier */
const Joi = require("joi");

const getStatus = {
  query: {
    collection: Joi.string().required(),
  },
};

const updateStatus = {
  body: Joi.object().keys({
    id: Joi.string().required(),
    status: Joi.string().required(),
    collection: Joi.string().required(),
  }),
};

module.exports = {
  getStatus,
  updateStatus,
};
