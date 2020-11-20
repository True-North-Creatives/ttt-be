const ROLES = {
    Default: 'DEFAULT',
    Nutritionist: 'NUTRITIONIST',
    Trainer: 'TRAINER',
    Manager: 'MANAGER',
    Admin: 'ADMIN',
};
const route = {
    //   auth: {
    USER_EXISTS: 'user_exists',

    // menu
    UPDATE_MENU_ITEM: 'updateMenuItem',
    ADD_MENU_ITEM: 'addMenuItem',
    DELETE_MENU_ITEM: 'deleteMenuItem',
    GET_MENU_ITEM: 'getMenuItem',

    //   statusDiet: {
    UPDATE_MOD_STATUS: 'updateMODStatus',
    GET_MOD_STATUS: 'getMODStatus',

    //   planner: {
    CREATE_MOD_PLAN: 'createMODPlan',
    UPDATE_MOD_PLAN: 'updateMODPlan',
    GET_MOD_BY_ID: 'getMODById',
    GET_MOD_BY_WEEK: 'getMODByWeek',
    DELETE_MOD_BY_ID: 'deleteMODById',

    //   exercise: {
    ADD_EXERCISE: 'addExercise',
    UPDATE_EXERCISE: 'updateExercise',
    GET_EXERCISES: 'getExercises',
    DELETE_EXERCISE: 'deleteExercise',

    //   workout: {
    ADD_WOD: 'addWOD',
    GET_WOD_BY_ID: 'getWODById',
    GET_WOD_BY_DATE: 'getWODByDate',
    GET_WOD_STATUS: 'getWODStatus',
    UPDATE_WOD_STATUS: 'updateWODStatus',
    DELETE_WOD: 'deleteWOD',

    //   payment: {
    ADD_PAYMENT: 'addPayment',
    GET_ALL_PAYMENTS: 'getAllPayments',

    //   profile: {
    CREATE_PROFILE: 'createProfile',
    UPDATE_PROFILE: 'updateProfile',
    GET_USER_PROFILE: 'getUserProfile',
    GET_MY_PROFILE: 'getMyProfile',

    //   user: {
    CREATE_USER: 'createUser',
    GET_ALL_USERS: 'getAllUsers',
};

const roleRights = new Map();
roleRights.set(ROLES.Admin, Object.values(route));
roleRights.set(ROLES.Manager, [
    route.UPDATE_MENU_ITEM,
    route.ADD_MENU_ITEM,
    route.DELETE_MENU_ITEM,
    route.GET_MENU_ITEM,
    route.UPDATE_MOD_STATUS,
    route.GET_MOD_STATUS,
    route.GET_MOD_BY_ID,
    route.GET_MOD_BY_WEEK,
    route.DELETE_MOD_BY_ID,
    route.ADD_EXERCISE,
    route.UPDATE_EXERCISE,
    route.GET_EXERCISES,
    route.DELETE_EXERCISE,
    route.GET_WOD_BY_ID,
    route.GET_WOD_BY_DATE,
    route.GET_WOD_STATUS,
    route.DELETE_WOD,
    route.UPDATE_MOD_STATUS,
    route.GET_USER_PROFILE,
    route.CREATE_USER,
    route.GET_ALL_USERS,
]);
roleRights.set(ROLES.Nutritionist, [
    route.ADD_MENU_ITEM,
    route.GET_MENU_ITEM,
    route.GET_MOD_STATUS,
    route.CREATE_MOD_PLAN,
    route.UPDATE_MOD_PLAN,
    route.GET_MOD_BY_ID,
    route.GET_MOD_BY_WEEK,
]);
roleRights.set(ROLES.Trainer, [
    route.ADD_WOD,
    route.GET_WOD_BY_ID,
    route.GET_WOD_BY_DATE,
    route.GET_WOD_STATUS,
    route.UPDATE_WOD_STATUS,
    route.ADD_EXERCISE,
    route.GET_EXERCISES,
]);
roleRights.set(ROLES.Default, [
    route.GET_MOD_BY_WEEK,
    route.GET_WOD_BY_DATE,
    route.UPDATE_PROFILE,
    route.GET_USER_PROFILE,
    route.USER_EXISTS,
    route.ADD_PAYMENT,
    route.GET_ALL_PAYMENTS,
    route.GET_MY_PROFILE,
]);

module.exports = {
    ROLES,
    roleRights,
    route,
};
