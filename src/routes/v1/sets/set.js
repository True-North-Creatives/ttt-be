const router = require('express').Router();
// const validate = require('../../../middlewares/validate');

const catchAsync = require('../../../utils/catchAsync');

const controllers = require('../../../controllers/sets');

router
    .route('/')
    .get((req, res) => res.sendStatus(200))
    .post(catchAsync(controllers.addSet));

module.exports = router;
