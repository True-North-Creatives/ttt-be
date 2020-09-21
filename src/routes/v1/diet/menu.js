const express = require("express");
const menuController = require("../../../controllers/food/menu.controller");
const { authorize } = require("../../../middlewares/auth");
const validate = require("../../../middlewares/validate");
const menuValidation = require("../../../validations/menu.validation");

const router = express.Router();

router.put(
  "/",
  [
    authorize("admin", "manager", "nutritioner"),
    validate(menuValidation.updateFoodItem),
  ],
  menuController.updateMenuItem
);

router.get(
  "/",
  [
    authorize("admin", "manager", "nutritioner", "user"),
    validate(menuValidation.getFoodMenu),
  ],
  menuController.getMenu
);

router.post(
  "/",
  [
    authorize("manager", "admin", "nutritioner"),
    validate(menuValidation.addFoodItem),
  ],
  menuController.addMenuItem
);

router.delete(
  "/:id",
  [
    authorize("manager", "admin", "nutritioner"),
    validate(menuValidation.deleteFoodItem),
  ],
  menuController.deleteMenuItem
);

module.exports = router;
