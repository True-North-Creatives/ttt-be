const mongoose = require('mongoose');
const { toJSON } = require('../plugins');

mongoose.set('useFindAndModify', false);
const PaymentSchema = new mongoose.Schema({
    // User whose payment is being made
    userId: {
        type: String,
        required: true,
    },
    transactionId: {
        type: String,
        required: true,
    },
    // TransactionMethod: GooglePay, PayPal
    transactionMethod: {
        type: String,
        required: true,
    },
    paidAmount: {
        type: Number,
        required: true,
    },
    // Payment Date
    paidDate: {
        type: Date,
        required: true,
    },
});

PaymentSchema.plugin(toJSON);
const Payment = mongoose.model('payment', PaymentSchema);

module.exports = Payment;
