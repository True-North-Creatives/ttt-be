const httpStatus = require("http-status");
const User = require("../../models/user/user.model");
const ApiError = require("../../utils/ApiError");

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (payload) => {
  if (await User.isEmailTaken(payload.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }
  const user = await User.create(payload);
  return user;
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByFilter = async (filter) => {
  const user = await User.findOne(filter);
  return user;
};

/**
 * Update user by email id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUser = async (email, token) => {
  const user = await User.findOneAndUpdate(
    { email },
    { refreshToken: token }
  ).exec();
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  return user;
};

/**
 * Delete user by email id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (email) => {
  const user = await getUserByFilter({ email });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  await user.remove();
  return user;
};

const userPresent = async (email) => {
  const user = await User.isEmailTaken(email);
  return user;
};

const getAllUsers = async () => {
  const user = await User.find();
  return user;
};

module.exports = {
  createUser,
  queryUsers,
  getUserByFilter,
  updateUser,
  deleteUserById,
  userPresent,
  getAllUsers,
};
