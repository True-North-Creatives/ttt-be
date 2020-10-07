const httpStatus = require("http-status");
const moment = require("moment");
const WOD = require("../../models/exercise/wod.model");
const ApiError = require("../../utils/ApiError");

const updateStatus = async ({ collection, status, id }) => {
  const payload = await WOD[collection].findByIdAndUpdate(id, { status });
  return { id: payload.id, status: payload.status };
};

const getStatus = async ({ collection }) => {
  const status = await WOD[collection]
    .find({ date: { $gte: moment().format("YYYY-MM-DD") } }, "date status _id")
    .sort({ date: 1 })
    .exec();
  if (!status) {
    throw new ApiError(httpStatus.NOT_FOUND, "status not found");
  }
  return status;
};

module.exports = {
  getStatus,
  updateStatus,
};
