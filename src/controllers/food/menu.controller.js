const httpStatus = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const menuService = require("../../services/diet/menu.service");

const getMenu = catchAsync(async (req, res) => {
  const menu = await menuService.getMenu();
  res.status(httpStatus.OK).send(menu);
});

const updateMenuItem = catchAsync(async (req, res) => {
  const menuItem = await menuService.updateMenuItem(req.body);
  res.status(httpStatus.OK).send(menuItem);
});

const addMenuItem = catchAsync(async (req, res) => {
  const menuItem = await menuService.addMenuItem(req.body);
  res.status(httpStatus.OK).send(menuItem);
});

const deleteMenuItem = catchAsync(async (req, res) => {
  const menuItem = await menuService.deleteMenuItem(req.params);
  res.status(httpStatus.OK).send(menuItem);
});

const substituteArray = catchAsync(async (req, res) => {
  const substitutes = await menuService.substituteArray(req.body);
  res.status(httpStatus.OK).send(substitutes);
});
const getSwapItemList = catchAsync(async (req, res) => {
  const swapList = await menuService.getSwapItemList(req.body);
  res.status(httpStatus.OK).send(swapList);
});
const getSwapItemFullInfo = catchAsync(async (req, res) => {
  const menuItem = await menuService.getSwapItemFullInfo(req.body);
  res.status(httpStatus.OK).send(menuItem);
});

module.exports = {
  addMenuItem,
  updateMenuItem,
  getMenu,
  deleteMenuItem,
  substituteArray,
  getSwapItemList,
  getSwapItemFullInfo,
};
