const httpStatus = require('http-status');

const catchAsync = require('../../utils/catchAsync');
const paymentService = require('../../services/payment/payment.service');

const addPayment = catchAsync(async (req, res) => {
    const paymentSuccess = await paymentService.addPayment(req.body);
    res.status(httpStatus.OK).send(paymentSuccess);
});

const getAllPayments = catchAsync(async (req, res) => {
    const allPayments = await paymentService.getAllPayments();
    res.status(httpStatus.OK).send(allPayments);
});

module.exports = {
    addPayment,
    getAllPayments,
};
