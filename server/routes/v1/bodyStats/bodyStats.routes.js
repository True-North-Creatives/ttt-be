const router = require('express').Router();

const validate = require('../../../middlewares/validate');
const catchAsync = require('../../../utils/catchAsync');

const controllers = require('../../../controllers/bodyStats');

const validations = require('../../../validations/bodyStats.validations');

router
    .route('/')
    .get(
        validate(validations.getBodyStats),
        catchAsync(controllers.getBodyStats)
    )
    .post(validate(validations.addStats), catchAsync(controllers.addBodyStats));

router.get('/parts', catchAsync(controllers.getBodyParts));

module.exports = router;
