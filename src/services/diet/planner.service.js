/* eslint-disable  prettier/prettier */
/* eslint-disable */
const httpStatus = require("http-status");
const MODModel = require("../../models/diet/mod.model");
const FoodModel = require("../../models/diet/food.model");
const ApiError = require("../../utils/ApiError");
const logger = require("./../../config/logger")
const createDayPlan = async (payload) => {
  const plan = new MODModel[payload.collection](payload);
  await plan.save();
  return plan;
};

const getPlan = async ({ collection, week }) => {
  const MODPlan = await MODModel[collection].findOne({ week }).lean();
  if (!MODPlan) {
    throw new ApiError(httpStatus.NOT_FOUND, "Plan not found");
  }
  logger.info("Normalizing the response: " + JSON.stringify(MODPlan));
  for (let planIndex = 0; planIndex < MODPlan.plans.length; planIndex++) {
    const plan = MODPlan.plans[planIndex];
    for (let mealIndex = 0; mealIndex < plan.meals.length; mealIndex++) {
      const items = plan.meals[mealIndex].items;
      for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
        let menu = await FoodModel.findOne({ _id: items[itemIndex].id }).lean();
        items[itemIndex] = { ...items[itemIndex], ...menu };
      }
    }
  }
  logger.info("Normalized response: " + JSON.stringify(MODPlan));
  return MODPlan;
};

const getPlanById = async ({ id, collection }) => {
  const MODPlan = await MODModel[collection].findById(id).lean();
  if (!MODPlan) {
    throw new ApiError(httpStatus.NOT_FOUND, "Plan not found");
  }
  for (let planIndex = 0; planIndex < MODPlan.plans.length; planIndex++) {
    const plan = MODPlan.plans[planIndex];
    for (let mealIndex = 0; mealIndex < plan.meals.length; mealIndex++) {
      const items = plan.meals[mealIndex].items;
      for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
        let menu = await FoodModel.findOne({ _id: items[itemIndex].id }).lean();
        items[itemIndex] = { ...items[itemIndex], ...menu };
      }
    }
  }
  return MODPlan;
};

const deleteDayPlanById = async ({ id, collection }) => {
  const plan = await MODModel[collection].findById(id).exec();
  if (!plan) {
    throw new ApiError(httpStatus.NOT_FOUND, "Plan not found");
  }
  return plan;
};

//insert collection name in the payload
const updatePlanById = async (payload) => {
  let plan = await MODModel[payload.collection]
    .findByIdAndUpdate(payload.id, {
      ...payload,
    })
    .exec();

  if (!plan) {
    throw new ApiError(httpStatus.NOT_FOUND, "Plan not found");
  }
  plan = await MODModel[payload.collection].findById(payload.id).exec();
  return plan;
};

module.exports = {
  createDayPlan,
  getPlan,
  getPlanById,
  updatePlanById,
  deleteDayPlanById,
};
