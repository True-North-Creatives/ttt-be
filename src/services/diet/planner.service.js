const httpStatus = require("http-status");
const MOD = require("../../models/diet/mod.model");
const ApiError = require("../../utils/ApiError");

const createDayPlan = async (payload) => {
  const plan = new MOD(payload);
  await plan.save();
  return plan;
};

const getPlan = async ({ category, date }) => {
  const plan = MOD.find({ category, date }).exec();
  if (!plan) {
    throw new ApiError(httpStatus.NOT_FOUND, "Plan not found");
  }
  return plan;
};

const getPlanById = async ({ id }) => {
  const plan = MOD.findById(id).exec();
  if (!plan) {
    throw new ApiError(httpStatus.NOT_FOUND, "Plan not found");
  }
  return plan;
};

const updatePlanById = async ({ id }) => {
  const plan = MOD.findByIdAndUpdate(id).exec();
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
};
