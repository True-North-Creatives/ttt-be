const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const statusService = require('../../services/diet/status.service');

const getStatus = catchAsync(async (req, res) => {
    const plan = await statusService.getStatus(req.query);
    res.status(httpStatus.OK).send(plan);
});

const updateStatus = catchAsync(async (req, res) => {
    const plan = await statusService.updateStatus(req.body);
    res.status(httpStatus.OK).send(plan);
});

module.exports = {
    getStatus,
    updateStatus,
};
