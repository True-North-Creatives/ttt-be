const Joi = require("joi");

const getAllStatus = {
  query: {
    category: Joi.string().required(),
  },
};

const updateStatus = {
  body: {
    query: Joi.object().keys({
      id: Joi.string().required(),
      status: Joi.string().required(),
    }),
  },
};

module.exports = {
  getAllStatus,
  updateStatus,
};