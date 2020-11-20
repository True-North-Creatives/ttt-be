const router = require('express').Router();
// const validate = require('../../../middlewares/validate');

const catchAsync = require('../../../utils/catchAsync');

const controllers = require('../../../controllers/sets');

router
    .route('/')
    .get(catchAsync(controllers.getSet))
    .post(catchAsync(controllers.addSet))
    .patch(catchAsync(controllers.updateWorkout));

router.get('/history', catchAsync(controllers.calculate));

router
    .route('/:id')
    .get((req, res) => res.sendStatus(200))
    .post(catchAsync(controllers.addSet))
    .patch(catchAsync(controllers.updateSet))
    .delete(catchAsync(controllers.deleteSet));

module.exports = router;
