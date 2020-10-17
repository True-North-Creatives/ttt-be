/* eslint-disable prettier/prettier */
const httpStatus = require('http-status');
const PaymentModel = require('../../models/payment/payment.model');
const UserModel = require('../../models/user/user.model');
const ApiError = require('../../utils/ApiError');

// Adding Payment if transactionId is not null
// Updating isSubscribed to true on successful insertion of payment in the model
const addPayment = async (payload) => {
    let payment;
    if (payload.transactionId !== null) {
        payment = new PaymentModel(payload);
        if (await payment.save()) {
            await UserModel.findByIdAndUpdate(payload.userId, {
                $push: { payment: payment._id },
                isSubscribed: true,
            }).exec();
        } else
            throw new ApiError(
                httpStatus.INTERNAL_SERVER_ERROR,
                'PaymentRecord is not saved'
            );
    } else {
        payment = 'Payment Cancelled';
    }
    return payment;
};

// Get All Payments in the collection
const getAllPayments = async () => {
    const allPayments = PaymentModel.find();
    if ((await allPayments).length === 0)
        throw new ApiError(httpStatus.NOT_FOUND, 'No Payment found');
    return allPayments;
};

module.exports = {
    addPayment,
    getAllPayments,
};
