const httpStatus = require("http-status");
const MODModel = require("../../models/diet/mod.model");
const ApiError = require("../../utils/ApiError");

const createDayPlan = async (payload) => {
  const plan = new MODModel[payload.collection](payload);
  await plan.save();
  return plan;
};

const getPlan = async ({ collection, week }) => {
  const plan = await MODModel[collection].find({ week }).exec();
  if (!plan) {
    throw new ApiError(httpStatus.NOT_FOUND, "Plan not found");
  }
  return plan;
};

const getPlanById = async ({ id, collection }) => {
  const plan = await MODModel[collection].findById(id).exec();
  if (!plan) {
    throw new ApiError(httpStatus.NOT_FOUND, "Plan not found");
  }
  return plan;
};

const deleteDayPlanById = async ({ id, collection }) => {
  const plan = await MODModel[collection].findById(id).exec();
  if (!plan) {
    throw new ApiError(httpStatus.NOT_FOUND, "Plan not found");
  }
  return plan;
};

const updatePlanById = async ({ id, collection }) => {
  const plan = await MODModel[collection].findByIdAndRemove(id).exec();
  if (!plan) {
    throw new ApiError(httpStatus.NOT_FOUND, "Plan not found");
  }
  return plan;
};

module.exports = {
  createDayPlan,
  getPlan,
  getPlanById,
  updatePlanById,
  deleteDayPlanById,
};
