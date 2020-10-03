/* eslint-disable */
const httpStatus = require("http-status");
const FoodModel = require("../../models/diet/food.model");
const ApiError = require("../../utils/ApiError");

const updateMenuItem = async (payload) => {
  const menuItem = await FoodModel.findByIdAndUpdate(payload.id, {
    ...payload,
  });
  return menuItem;
};

// function to calculate the total calories, proteins, fat, carbs for the given item and quantity
const CalculateTotalCal = async (menuItem, quantity) => {
  if (menuItem.units === "g" || menuItem.units === "ml") {
    quantity = quantity;
  } else if (menuItem.units === "tbsp" || menuItem.units === "pcs") {
    quantity = (quantity * 200) / menuItem.conversion;
  }
  const fat = (menuItem.fat * quantity) / 200;
  const carb = (menuItem.carb * quantity) / 200;
  const protein = (menuItem.protein * quantity) / 200;
  const totalCalories = 9 * fat + 4 * carb + 4 * protein;
  const detailCalInfo = { fat, carb, protein, calories: totalCalories };
  return detailCalInfo;
};

// function where the conversion takes place
const Conversion = async (menuItem, quantity) => {
  let swapItem;
  if (menuItem.units === "g") {
    swapItem = { food: menuItem.food, quantity, units: "g" };
  } else if (menuItem.units === "ml") {
    swapItem = { food: menuItem.food, quantity, units: "ml" };
  }

  if (menuItem.units === "tbsp") {
    quantity = (quantity * menuItem.conversion) / 200;
    swapItem = { food: menuItem.food, quantity, units: "tbsp" };
  } else if (menuItem.units === "pcs") {
    quantity = (quantity * menuItem.conversion) / 200;
    swapItem = { food: menuItem.food, quantity, units: "pcs" };
  }
  return swapItem;
};

//function which is called from `substituteArray` func
//to update substitute array for the provided food item
const makeSubstituteArray = async (menuItem, range) => {
  const menuItems = await FoodModel.find({
    ingredient: menuItem.ingredient,
  }).exec();
  let substituteArray;
  for (let j = 0; j < menuItems.length; j++) {
    if (range === 2) {
      if (
        menuItems[j].fat <= menuItem.fat + range &&
        menuItems[j].fat >= menuItem.fat - range
      ) {
        if (
          !menuItem._id.equals(menuItems[j]._id) &&
          !menuItem.substitute.includes(menuItems[j]._id)
        ) {
          substituteArray = await FoodModel.findByIdAndUpdate(menuItem._id, {
            $push: { substitute: menuItems[j]._id },
          }).exec();
        }
      }
    } else if (range === 5) {
      if (
        menuItems[j].carb <= menuItem.carb + range &&
        menuItems[j].carb >= menuItem.carb - range
      ) {
        if (
          !menuItem._id.equals(menuItems[j]._id) &&
          !menuItem.substitute.includes(menuItems[j]._id)
        ) {
          substituteArray = await FoodModel.findByIdAndUpdate(menuItem._id, {
            $push: { substitute: menuItems[j]._id },
          }).exec();
        }
      }
    }
  }
};

// Put call to update substitute array for the given food item
const substituteArray = async (payload) => {
  const menuItem = await FoodModel.findOne({ food: payload.food });
  if (!menuItem) {
    throw new ApiError(httpStatus.NOT_FOUND, "menu item not found");
  }
  if (
    menuItem.ingredient === "Proteins" ||
    menuItem.ingredient === "CHEESES - DAIRY AND NON-DAIRY" ||
    menuItem.ingredient === "FATS- OILS AND FATTY FOODS"
  ) {
    await makeSubstituteArray(menuItem, 2);
  } else {
    await makeSubstituteArray(menuItem, 5);
  }
  const MenuItemWithSubstitute = await FoodModel.findOne({
    food: payload.food,
  });
  return MenuItemWithSubstitute;
};

//Post call to get the list of items that can be swapped with the Item provided
const getSwapItemList = async (payload) => {
  const updatedItemWithSubstitute = await substituteArray(payload); // with subs array
  const totalCalories = await CalculateTotalCal(
    updatedItemWithSubstitute,
    payload.quantity
  );
  const swapList = [];
  for (let i = 0; i < updatedItemWithSubstitute.substitute.length; i++) {
    const menuItem = await FoodModel.findOne({
      _id: updatedItemWithSubstitute.substitute[i],
    }).exec();
    const quantity = (200 * totalCalories.calories) / menuItem.calories;
    const swapItem = await Conversion(menuItem, quantity);
    swapList.push(swapItem);
  }
  return swapList;
};

//post call to get detailed info of the selected swapped Item
const getSwapItemFullInfo = async (payload) => {
  const menuItem = await FoodModel.findOne({ food: payload.food });
  const MenuInfo = await CalculateTotalCal(menuItem, payload.quantity);
  const SwappedMenuItem = {
    quantity: payload.quantity,
    food: menuItem.food,
    ...MenuInfo,
    ingredient: menuItem.ingredient,
    _id: menuItem._id,
    type: menuItem.type,
    units: menuItem.units,
  };
  return SwappedMenuItem;
};

// Returns list of all the food items without substituteArray
const getMenu = async () => {
  const menu = await FoodModel.find().exec();
  const ingredient = await FoodModel.find().distinct("ingredient").exec();
  const type = await FoodModel.find().distinct("type").exec();
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, "menu item not found");
  }
  return { menu, ingredient, type };
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
  substituteArray,
  getSwapItemList,
  getSwapItemFullInfo,
};
