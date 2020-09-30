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
    fat: Joi.number().required(),
    carb: Joi.number().required(),
    protein: Joi.number().required(),
    calories: Joi.number().required(),
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
    fat: Joi.number().required(),
    carb: Joi.number().required(),
    protein: Joi.number().required(),
    calories: Joi.number().required(),
    units: Joi.string().required(),
    conversion: Joi.number().required(),
  }),
};
const substituteArray = {
  body: Joi.object().keys({
    food: Joi.string().required(),
  }),
};

const getSwapItemList = {
  body: Joi.object().keys({
    food: Joi.string().required(),
    quantity: Joi.number().required(),
  }),
};
const getSwapItemFullInfo = {
  body: Joi.object().keys({
    food: Joi.string().required(),
    quantity: Joi.number().required(),
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
  substituteArray,
  getSwapItemList,
  getSwapItemFullInfo,
};
