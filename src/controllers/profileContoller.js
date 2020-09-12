/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
const {validationResult} = require('express-validator');
const Profile = require('../models/Profile');

module.exports = createProfile = async (req,res) =>{
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
        // eslint-disable-next-line no-console
        console.log(err.message);
        res.status(500).send('Server Error')
    }

};


module.exports = addBodyFeilds = async(req,res) =>{
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
      res.json(profile);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
};

module.exports = getSingleUserProfile =async(req,res) =>{
    try {
        const profile = await Profile.findOne({user: req.params.user_id}).populate('user',['name','age','gender']);

        if(!profile)return res.status(400).json({msg: 'Profile not found'});
        res.json(profile);
    } catch (error) {
        console.log(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.status(500).send('server error');
    }
}