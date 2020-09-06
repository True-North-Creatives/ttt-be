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
// const {check,validationResult} = require('express-validator');

const User = require('../../models/User');

router.post('/',async(req,res) =>{
    // console.log(req.body)
    const {name,email,age,gender,dateJoined,plan,subscription,place} = req.body;
    try {
        console.log('asd')
       let user = await User.findOne({email});
       if(user)return res.send('user exists');
       user = new User({
           name,email,age,gender,dateJoined,plan,subscription,place
       });
       await user.save();
       res.json(user)
    } catch (err) {
        // console.log(err.message);
        res.status(500).send('Server Error')
    }
});

router.get('/get_users',async(req,res) =>{
    try {
        const users = await User.find();
        if(users.length === 0)return res.send('no users found');
        res.json(users);
    } catch (err) {
        // console.log(err.message);
        res.status(500).send('server error');
    }
});

module.exports = router;