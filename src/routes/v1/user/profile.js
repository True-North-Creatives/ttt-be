const express = require("express");

const router = express.Router();

// middlewares
const validate = require("../../../middlewares/validate");
const profileValidation = require("../../../validations/profile.validation");

// controllers
const profileController = require("../../../controllers/user/profile.controller");

// create profile
router.post(
  "/",
  validate(profileValidation.createProfile),
  profileController.createProfile
);

// update profile
router.put(
  "/",
  validate(profileValidation.updateProfile),
  profileController.updateProfile
);

// add and update body feilds
router.put(
  "/body",
  validate(profileValidation.bodyProfile),
  profileController.updateBody
);

router.get(
  "/:userId",
  validate(profileValidation.getUserProfile),
  profileController.getUserProfile
);

module.exports = router;
