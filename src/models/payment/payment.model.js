const mongoose = require("mongoose");
const { toJSON } = require("../plugins");

mongoose.set("useFindAndModify", false);
const PaymentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  transactionMethod: {
    type: String,
    required: true,
  },
  paidDate: {
    type: Date,
    required: true,
  },
});

PaymentSchema.plugin(toJSON);
const Payment = mongoose.model("payment", PaymentSchema);

module.exports = Payment;
