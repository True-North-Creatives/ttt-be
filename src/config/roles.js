const ROLES = {
  Default: "DEFAULT",
  Nutritionist: "NUTRITIONIST",
  Trainer: "TRAINER",
  Manager: "MANAGER",
  Admin: "ADMIN",
};
const route = {
  //   auth: {
  USER_EXISTS: "user_exists",

  // menu
  UPDATE_MENU_ITEM: "updateMenuItem",
  ADD_MENU_ITEM: "addMenuItem",
  DELETE_MENU_ITEM: "deleteMenuItem",
  GET_MENU: "getMenu",

  //   statusDiet: {
  UPDATE_MOD_STATUS: "updateMODStatus",
  GET_MOD_STATUS: "getMODStatus",

  //   planner: {
  CREATE_DAY_PLAN: "createDayPlan",
  UPDATE_MOD_PLAN: "updateMODPlan",
  GET_DAY_PLAN_BY_ID: "getDayPlanById",
  GET_MOD_BY_DATE: "getModByDate",
  GET_DAY_PLAN: "getDayPlan",
  DELETE_DAY_PLAN_BY_ID: "deleteDayPlanById",

  //   exercise: {
  ADD_EXERCISE: "addExercise",
  UPDATE_EXERCISE: "updateExercise",
  GET_EXERCISES: "getExercises",
  DELETE_EXERCISE: "deleteExercise",

  //   workout: {
  ADD_WOD: "addWOD",
  GET_WOD_BY_ID: "getWODById",
  GET_WOD_BY_DATE: "getWODByDate",
  GET_WOD: "getWOD",
  GET_WOD_STATUS: "getWODStatus",
  UPDATE_WOD_STATUS: "updateWODStatus",
  DELETE_WOD: "deleteWOD",

  //   payment: {
  ADD_PAYMENT: "addPayment",
  GET_ALL_PAYMENTS: "getAllPayments",

  //   profile: {
  CREATE_PROFILE: "createProfile",
  UPDATE_PROFILE: "updateProfile",
  GET_USER_PROFILE: "getUserProfile",

  //   user: {
  CREATE_USER: "createUser",
  GET_ALL_USERS: "getAllUsers",
};

const roleRights = new Map();
roleRights.set(ROLES.Admin, Object.values(route));
roleRights.set(ROLES.Manager, Object.values(route));
roleRights.set(ROLES.Nutritionist, [
  route.CREATE_DAY_PLAN,
  route.UPDATE_PLAN,
  route.GET_DAY_PLAN_BY_ID,
  route.GET_DAY_PLAN,
  route.UPDATE_MOD_STATUS,
]);
roleRights.set(ROLES.Trainer, [
  route.ADD_WOD,
  route.GET_WOD_BY_ID,
  route.GET_WOD,
  route.GET_WOD_STATUS,
  route.UPDATE_WOD_STATUS,
]);
roleRights.set(ROLES.Default, [
  route.GET_MOD_BY_DATE,
  route.GET_WOD_BY_DATE,
  route.UPDATE_PROFILE,
  route.GET_USER_PROFILE,
]);

module.exports = {
  ROLES,
  roleRights,
  route,
};
