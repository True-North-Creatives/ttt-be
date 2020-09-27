const Joi = require("joi");

const createDayPlan = {
  body: Joi.object().keys({
    collection: Joi.string().required(),
    from: Joi.string().required(),
    to: Joi.string().required(),
    week: Joi.number().required(),
    status: Joi.string().required(),
    plans: Joi.array().items({
      name: Joi.string().required(),
      repeat: Joi.array().items({
        name: Joi.string().required(),
        checked: Joi.bool().required(),
        disabled: Joi.bool().required(),
      }),
      meals: Joi.array().items({
        name: Joi.string().required(),
        items: Joi.array().items({
          cal: Joi.number().required(),
          carbs: Joi.number().required(),
          fats: Joi.number().required(),
          ingredient: Joi.string().required(),
          name: Joi.string().required(),
          protein: Joi.number().required(),
          qty: Joi.number().required(),
          sub_ingredient: Joi.string().required(),
        }),
      }),
    }),
  }),
};

const updatePlan = {
  body: Joi.object().keys({
    id: Joi.string().required(),
    collection: Joi.string().required(),
    from: Joi.string().required(),
    to: Joi.string().required(),
    week: Joi.number().required(),
    status: Joi.string().required(),
    plans: Joi.array().items({
      name: Joi.string().required(),
      repeat: Joi.array().items({
        name: Joi.string().required(),
        checked: Joi.bool().required(),
        disabled: Joi.bool().required(),
      }),
      meals: Joi.array().items({
        name: Joi.string().required(),
        items: Joi.array().items({
          cal: Joi.number().required(),
          carbs: Joi.number().required(),
          fats: Joi.number().required(),
          ingredient: Joi.string().required(),
          name: Joi.string().required(),
          protein: Joi.number().required(),
          qty: Joi.number().required(),
          sub_ingredient: Joi.string().required(),
        }),
      }),
    }),
  }),
};

const getDayPlan = {
  query: {
    collection: Joi.string().required(),
    week: Joi.number().max(52).min(1),
  },
};

const getDayPlanById = {
  param: {
    id: Joi.string().required(),
    collection: Joi.string().required(),
  },
};

const deleteDayPlanById = {
  param: {
    id: Joi.string().required(),
    collection: Joi.string().required(),
  },
};

module.exports = {
  createDayPlan,
  getDayPlan,
  getDayPlanById,
  updatePlan,
  deleteDayPlanById,
};
