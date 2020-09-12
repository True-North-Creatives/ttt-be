/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
const User = require('../models/User');


module.exports =  addUser = async(req,res) =>{
    // console.log(req.body)
    const {name,email,age,gender,dateJoined,plan,subscription,place} = req.body;
    try {
        console.log('asd')
       let user = await User.findOne({email});
       if(user)return res.status(400).json({msg:'User already exists'});
       user = new User({
           name,email,age,gender,dateJoined,plan,subscription,place
       });
       await user.save();
       res.json(user)
    } catch (err) {
        // console.log(err.message);
        res.status(500).send('Server Error')
    }
};

module.exports = getAllUsers =async(req,res) =>{
    try {
        const users = await User.find();
        if(users.length === 0)return res.send('no users found');
        res.json(users);
    } catch (err) {
        // console.log(err.message);
        res.status(500).send('server error');
    }
}