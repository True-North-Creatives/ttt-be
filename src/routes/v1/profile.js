/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const express = require('express');
const router = express.Router();

// middlewares
const {validateProfileFeilds} = require('../../middlewares/profileValidation');
const {validateBodyFeilds} = require('../../middlewares/profileValidation');

// controllers
const createProfile = require('../../controllers/profileContoller');
const addBodyFeilds = require('../../controllers/profileContoller');
const getSingleUserProfile = require('../../controllers/profileContoller');

// console.log(validateProfileFeilds);
router.post('/',validateProfileFeilds,createProfile);

router.post('/body',validateBodyFeilds,addBodyFeilds);

router.get('/:user_id', getSingleUserProfile);

module.exports = router;