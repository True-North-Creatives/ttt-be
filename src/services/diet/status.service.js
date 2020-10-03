const httpStatus = require("http-status");
const moment = require("moment");
const MODModel = require("../../models/diet/mod.model");
const ApiError = require("../../utils/ApiError");

const updateStatus = async ({ week, status, collection }) => {
  const paylaod = await MODModel[collection].updateOne({ week }, { status });
  return { id: paylaod.id, status: paylaod.status };
};

const getStatus = async ({ collection }) => {
  const status = MODModel[collection]
    .find(
      { to: { $gte: moment().format("DD/MM/YYYY") } },
      "week from to status"
    )
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
