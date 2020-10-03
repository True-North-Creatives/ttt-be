const Joi = require("joi");

const getAllStatus = {
  query: {
    collection: Joi.string().required(),
  },
};

const updateStatus = {
  body: Joi.object().keys({
    week: Joi.number().required(),
    status: Joi.string().required(),
    collection: Joi.string().required(),
  }),
};

module.exports = {
  getAllStatus,
  updateStatus,
};
