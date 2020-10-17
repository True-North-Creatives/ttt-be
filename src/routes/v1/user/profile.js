const express = require('express');

const router = express.Router();

// middlewares
const validate = require('../../../middlewares/validate');
const profileValidation = require('../../../validations/profile.validation');
const authorize = require('../../../middlewares/auth');
const { route } = require('../../../config/roles');

// controllers
const profileController = require('../../../controllers/user/profile.controller');

// create profile
router.post(
    '/',
    authorize(route.CREATE_PROFILE),
    validate(profileValidation.createProfile),
    profileController.createProfile
);

// update profile
router.put(
    '/',
    authorize(route.UPDATE_PROFILE),
    validate(profileValidation.updateProfile),
    profileController.updateProfile
);

router.get(
    '/:userId',
    authorize(route.GET_USER_PROFILE),
    validate(profileValidation.getUserProfile),
    profileController.getUserProfile
);

module.exports = router;
