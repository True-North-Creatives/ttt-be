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
const {check,validationResult} = require('express-validator');

// models
const User = require('../../models/User');
const Profile = require('../../models/Profile');
const { findOneAndUpdate } = require('../../models/User');

router.post('/',[
    check('height','Height is required').not().isEmpty(),
    check('dailySleep','DailySleep is required').not().isEmpty(),
    check('cusine','Cusine is required').not().isEmpty()
],async (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty())return res.status(400).json({errors: errors.array()});

    const {height,dailySleep,allergies,cusine} = req.body;
    const profileFeilds = {};

    profileFeilds.user = req.body.user.id;
    if(height) profileFeilds.height = height;
    if(dailySleep)profileFeilds.dailySleep = dailySleep; 

    profileFeilds.diet = {};
    if(cusine)profileFeilds.diet.cusine = cusine;
    if(allergies)profileFeilds.diet.allergies = allergies.split(',').map(a => a.trim());

    try {
        let profile = await Profile.findOne({user: req.body.user.id});
        if(profile){
            // If there is profile then user is trying to update
            profile = await Profile.findOneAndUpdate({user: req.body.user.id}, {$set: profileFeilds},{new: true});
            return res.json(profile);
        }

        // if no profile user is creating new profile
        profile = new Profile(profileFeilds);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }

});

router.post('/body',[
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
],async(req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty())return res.status(400).json({errors: errors.array()});
    
    const {
        weight,
        fat,
        waist,
        chest,
        hip,
        quad,
        leftBicep,
        rightBicep,
        leftForeArm,
        rightForeArm,
        leftThigh,
        rightThigh,
        leftCalf,
        rightCalf,
        shoulder
    } = req.body;
    
    const bodyMeasurements = {};
    if(weight) bodyMeasurements.weight = weight;
    if(fat)bodyMeasurements.fat = fat;
    if(waist)bodyMeasurements.waist = waist;
    if(chest)bodyMeasurements.chest = chest;
    if(hip)bodyMeasurements.hip = hip;
    if(quad)bodyMeasurements.quad = quad;
    if(leftBicep)bodyMeasurements.leftBicep = leftBicep;
    if(rightBicep)bodyMeasurements.rightBicep = rightBicep;
    if(leftForeArm)bodyMeasurements.leftForeArm = leftForeArm;
    if(rightForeArm)bodyMeasurements.rightForeArm = rightForeArm;
    if(leftThigh)bodyMeasurements.leftThigh = leftThigh;
    if(rightThigh)bodyMeasurements.rightThigh = rightThigh;
    if(leftCalf)bodyMeasurements.leftCalf = leftCalf;
    if(rightCalf)bodyMeasurements.rightCalf = rightCalf;
    if(shoulder)bodyMeasurements.shoulder = shoulder;

    try {
      let profile = await Profile.findOne({user:req.body.user.id});
      //  if profile doesnot exist 
      if(!profile) return res.status(400).json({msg: "Create a Profile first"});

    //   if body measurements exist then user is updating them
      if(profile.bodyMeasurements !== {}){
          profile = await Profile.findOneAndUpdate({user: req.body.user.id},{$set: {bodyMeasurements}},{new: true});
          return res.json(profile);
      }

    //   create body measurements
      profile.bodyMeasurements = bodyMeasurements;
      await profile.save();
      res.send(profile);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
});

router.get('/:user_id', async(req,res) =>{
    try {
        const profile = await Profile.findOne({user: req.params.user_id}).populate('user',['name','age','gender']);
        console.log(profile);
        if(!profile)return res.status(400).json({msg: 'Profile not found'});
        res.json(profile);
    } catch (error) {
        console.log(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.status(500).send('server error');
    }
});

module.exports = router;