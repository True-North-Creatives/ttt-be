const {check} = require('express-validator');

module.exports = validateProfileFeilds = [
    check('height','Height is required').not().isEmpty(),
    check('dailySleep','DailySleep is required').not().isEmpty(),
    check('cusine','Cusine is required').not().isEmpty()
];

module.exports = validateBodyFeilds = [
    check('weight','Weight is required').not().isEmpty(),
    check('fat','Fat is required').not().isEmpty(),
    check('waist','Waist is required').not().isEmpty(),
    check('chest','Chest is required').not().isEmpty(),
    check('hip','hip is required').not().isEmpty(),
    check('quad','Quad is required').not().isEmpty(),
    check('leftBicep','LeftBicep is required').not().isEmpty(),
    check('leftForeArm','LeftForeArm is required').not().isEmpty(),
    check('rightForeArm','RightForeArm is required').not().isEmpty(),
    check('leftThigh','LeftThigh is required').not().isEmpty(),
    check('rightThigh','RightThigh is required').not().isEmpty(),
    check('leftCalf','LeftCalf is required').not().isEmpty(),
    check('rightCalf','RightCalf is required').not().isEmpty(),
    check('shoulder','Shoulder is required').not().isEmpty(),
];