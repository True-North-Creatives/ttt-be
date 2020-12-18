const router = require('express').Router();
const validate = require('../../../middlewares/validate');
const setValidation = require('../../../validations/set.validations');

const catchAsync = require('../../../utils/catchAsync');

const controllers = require('../../../controllers/sets');

router
    .route('/')
    .get(validate(setValidation.getSets), catchAsync(controllers.getSet))
    .post(validate(setValidation.addSet), catchAsync(controllers.addSet))
    .patch(catchAsync(controllers.updateWorkout));

router.get('/history', catchAsync(controllers.calculate));

router
    .route('/:id')
    .get((req, res) => res.sendStatus(200))
    // .post(catchAsync(controllers.addSet))
    .patch(catchAsync(controllers.updateSet))
    .delete(catchAsync(controllers.deleteSet));

module.exports = router;
