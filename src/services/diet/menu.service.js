const httpStatus = require("http-status");
const FoodModel = require("../../models/diet/food.model");
const ApiError = require("../../utils/ApiError");

const updateMenuItem = async (payload) => {
  const menuItem = await FoodModel.findByIdAndUpdate(payload.id, {
    ...payload,
  });
  return menuItem;
};

const getMenu = async () => {
  const menu = FoodModel.find({}).exec();
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, "menu item not found");
  }
  return menu;
};

const addMenuItem = async (payload) => {
  const menu = new FoodModel(payload);
  await menu.save();
  return menu;
};

const deleteMenuItem = async ({ id }) => {
  const menu = FoodModel.deleteOne({ id }).exec();
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, "menu item not found");
  }
  return menu;
};

module.exports = {
  getMenu,
  updateMenuItem,
  addMenuItem,
  deleteMenuItem,
};
