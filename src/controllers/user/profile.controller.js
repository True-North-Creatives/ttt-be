const httpStatus = require('http-status');

const catchAsyc = require('../../utils/catchAsync');
const profileService = require('../../services/user/profile.service');

const createProfile = catchAsyc(async (req, res) => {
    const profile = await profileService.createProfile(req.body);
    res.status(httpStatus.OK).send(profile);
});

const updateProfile = catchAsyc(async (req, res) => {
    const profile = await profileService.updateProfile(req.body);
    res.status(httpStatus.OK).send(profile);
});

const getUserProfile = catchAsyc(async (req, res) => {
    const profile = await profileService.getUserProfile(req.params);
    res.status(httpStatus.OK).send(profile);
});

module.exports = {
    createProfile,
    updateProfile,
    getUserProfile,
};
