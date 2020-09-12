const Joi = require("joi");

const getFoodMenu = {
  /**
   * No validation for this type of request
   */
};

const addFoodItem = {
  body: Joi.object().keys({
    ingredient: Joi.string().required(),
    type: Joi.string().required(),
    food: Joi.string().required(),
    fat: Joi.string().required(),
    carb: Joi.string().required(),
    protein: Joi.string().required(),
    calories: Joi.string().required(),
    units: Joi.string().required(),
    conversion: Joi.number().required(),
  }),
};

const updateFoodItem = {
  body: Joi.object().keys({
    id: Joi.string().required(),
    ingredient: Joi.string().required(),
    type: Joi.string().required(),
    food: Joi.string().required(),
    fat: Joi.string().required(),
    carb: Joi.string().required(),
    protein: Joi.string().required(),
    calories: Joi.string().required(),
    units: Joi.string().required(),
    conversion: Joi.number().required(),
  }),
};

const deleteFoodItem = {
  param: {
    id: Joi.string().required(),
  },
};

module.exports = {
  getFoodMenu,
  addFoodItem,
  updateFoodItem,
  deleteFoodItem,
};
