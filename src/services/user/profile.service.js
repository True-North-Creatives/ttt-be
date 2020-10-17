const httpStatus = require('http-status');
const ProfileModel = require('../../models/user/profile.model');
const ApiError = require('../../utils/ApiError');

const createProfile = async (payload) => {
    let profile = await ProfileModel.findOne({ user: payload.user.id });
    if (profile)
        throw new ApiError(
            httpStatus.INTERNAL_SERVER_ERROR,
            'Profile already exists'
        );
    profile = new ProfileModel(payload);
    await profile.save();
    return profile;
};

const updateProfile = async (payload) => {
    const profile = await ProfileModel.findByIdAndUpdate(
        { _id: payload.id },
        { ...payload }
    );
    return profile;
};

const getUserProfile = async ({ userId }) => {
    const profile = await ProfileModel.findOne({
        user: userId,
    }).populate('user', ['name', 'age', 'gender']);
    if (!profile) throw new ApiError(httpStatus.NOT_FOUND, 'Profile Not Found');
    return profile;
};

module.exports = {
    createProfile,
    updateProfile,
    getUserProfile,
};
