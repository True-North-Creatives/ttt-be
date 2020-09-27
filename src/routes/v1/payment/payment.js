const express = require("express");
const paymentValidation = require("../../../validations/payment.validation");
const validate = require("../../../middlewares/validate");

const router = express.Router();
const paymentController = require("../../../controllers/payment/payment.controller");

const authorize = require("../../../middlewares/auth");
const { route } = require("../../../config/roles");

// create a payment
router.post(
  "/",
  authorize(route.ADD_PAYMENT),
  validate(paymentValidation.addPayment),
  paymentController.addPayment
);

router.get(
  "/",
  authorize(route.GET_ALL_PAYMENTS),
  paymentController.getAllPayments
);

module.exports = router;
