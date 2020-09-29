const httpStatus = require("http-status");
const MODModel = require("../../models/diet/mod.model");
const ApiError = require("../../utils/ApiError");

const updateStatus = async ({ id, status, collection }) => {
  const paylaod = await MODModel[collection].findByIdAndUpdate(id, { status });
  return { id: paylaod.id, status: paylaod.status };
};

const getStatus = async ({ collection }) => {
  const status = MODModel[collection].find({}, "week from to status").exec();
  if (!status) {
    throw new ApiError(httpStatus.NOT_FOUND, "status not found");
  }
  return status;
};

module.exports = {
  getStatus,
  updateStatus,
};
