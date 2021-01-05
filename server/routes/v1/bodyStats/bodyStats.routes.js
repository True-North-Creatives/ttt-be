const router = require('express').Router();

const validate = require('../../../middlewares/validate');
const catchAsync = require('../../../utils/catchAsync');

const controllers = require('../../../controllers/bodyStats');

router.get('/parts', catchAsync(controllers.getBodyParts));

module.exports = router;
