const httpStatus = require("http-status");
const MOD = require("../../models/diet/mod.model");
const ApiError = require("../../utils/ApiError");

const updateStatus = async ({ id, status }) => {
  const paylaod = await MOD.findByIdAndUpdate(id, { status });
  return { id: paylaod.id, status: paylaod.status };
};

const getStatus = async ({ category }) => {
  const status = MOD.find({ category }, "week from to status").exec();
  if (!status) {
    throw new ApiError(httpStatus.NOT_FOUND, "status not found");
  }
  return status;
};

module.exports = {
  getStatus,
  updateStatus,
};
