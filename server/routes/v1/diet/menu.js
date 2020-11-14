const express = require('express');
const menuController = require('../../../controllers/food/menu.controller');
const validate = require('../../../middlewares/validate');
const menuValidation = require('../../../validations/menu.validation');
const authorize = require('../../../middlewares/auth');
const { route } = require('../../../config/roles');

const router = express.Router();

router.put(
    '/',
    authorize(route.UPDATE_MENU_ITEM),
    validate(menuValidation.updateFoodItem),
    menuController.updateMenuItem
);

router.get(
    '/',
    authorize(route.GET_MENU),
    validate(menuValidation.getFoodMenu),
    menuController.getMenu
);

router.post(
    '/',
    authorize(route.ADD_MENU_ITEM),
    validate(menuValidation.addFoodItem),
    menuController.addMenuItem
);

router.put('/substitute', menuController.substituteArray);
router.post('/swapItem', menuController.getSwapItemList);
router.post('/swapItemInfo', menuController.getSwapItemFullInfo);

router.delete(
    '/:id',
    authorize(route.DELETE_MENU_ITEM),
    validate(menuValidation.deleteFoodItem),
    menuController.deleteMenuItem
);

module.exports = router;
