const httpStatus = require('http-status');
const bcrypt = require('bcrypt');
const User = require('../../models/user/user.model');
const ApiError = require('../../utils/ApiError');
const roles = require('../../config/roles');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (payload) => {
    if (await User.isEmailTaken(payload.email)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
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
const updateUser = async (email, payload) => {
    const user = await User.findOneAndUpdate({ email }, { ...payload }).exec();
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    return user;
};

const updatePass = async (email, pass) => {
    const res = await User.updateOne(
        { email },
        { pass: await bcrypt.hash(pass, 8) }
    );
    return res;
};

/**
 * Delete user by email id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (email) => {
    const user = await getUserByFilter({ email });
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
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

const setResetURL = async (email, token) => {
    const user = await User.findOneAndUpdate(
        { email },
        { resetURL: token }
    ).lean();
    return user !== null;
};

const removeResetURL = async (email) => {
    const user = await User.findOneAndUpdate(
        { email },
        { token: undefined }
    ).exec();
    return user !== null;
};

const verifyResetURL = async (email, token) => {
    const { resetURL } = await User.findOne({ email }).lean();
    return token === resetURL;
};

const isSubscriptionActive = (user) => {
    return user.role.includes(roles.ROLES.Default);
};

module.exports = {
    createUser,
    queryUsers,
    getUserByFilter,
    updateUser,
    deleteUserById,
    userPresent,
    getAllUsers,
    setResetURL,
    removeResetURL,
    verifyResetURL,
    updatePass,
    isSubscriptionActive,
};
