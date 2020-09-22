const express = require("express");
const paymentValidation = require("../../../validations/payment.validation");
const validate = require("../../../middlewares/validate");

const router = express.Router();
const paymentController = require("../../../controllers/payment/payment.controller");

// create a payment
router.post(
  "/",
  validate(paymentValidation.addPayment),
  paymentController.addPayment
);

router.get("/", paymentController.getAllPayments);

module.exports = router;
