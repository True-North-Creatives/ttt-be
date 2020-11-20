const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const plannerService = require('../../services/diet/planner.service');

const createPlan = catchAsync(async (req, res) => {
    const plan = await plannerService.createDayPlan(req.body);
    res.status(httpStatus.CREATED).send(plan);
});

const getPlan = catchAsync(async (req, res) => {
    const plan = await plannerService.getPlan(req.query);
    res.status(httpStatus.OK).send(plan);
});

const getPlanById = catchAsync(async (req, res) => {
    const plan = await plannerService.getPlanById(req.params);
    res.status(httpStatus.OK).send(plan);
});

const deleteDayPlanById = catchAsync(async (req, res) => {
    const plan = await plannerService.deleteDayPlanById(req.params);
    res.status(httpStatus.OK).send(plan);
});

const updatePlan = catchAsync(async (req, res) => {
    const plan = await plannerService.updatePlanById(req.body);
    res.status(httpStatus.CREATED).send(plan);
});

module.exports = {
    createPlan,
    getPlan,
    getPlanById,
    updatePlan,
    deleteDayPlanById,
};
