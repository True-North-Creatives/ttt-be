const express = require("express");
const menuController = require("../../../controllers/food/menu.controller");
const validate = require("../../../middlewares/validate");
const menuValidation = require("../../../validations/menu.validation");

const router = express.Router();

router.put(
  "/",
  validate(menuValidation.updateFoodItem),
  menuController.updateMenuItem
);

router.get("/", validate(menuValidation.getFoodMenu), menuController.getMenu);

router.post(
  "/",
  validate(menuValidation.addFoodItem),
  menuController.addMenuItem
);

router.delete(
  "/:id",
  validate(menuValidation.deleteFoodItem),
  menuController.deleteMenuItem
);

module.exports = router;
