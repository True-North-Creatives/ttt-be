/* eslint-disable prettier/prettier */
const Joi = require('joi');

const createPayment = {
    body: Joi.object().keys({
        userId: Joi.string().required(),
        transactionId: Joi.string().required(),
        transactionMethod: Joi.string().required(),
        paidDate: Joi.date().required(),
    }),
};

module.exports = {
    createPayment,
};
