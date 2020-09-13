/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */

const httpStatus = require('http-status');
const UserModel = require('../../models/user/user.model');
const ApiError = require('../../utils/ApiError');

const addUser = async payload =>{
    let user = await UserModel.findOne({email: payload.email});
    if(user)throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'User Already exists');
    user = new UserModel(payload);
    await user.save();
    return user;
}

const getAllUsers = async () =>{
    const users = UserModel.find();
    if((await users).length === 0)throw new ApiError(httpStatus.NOT_FOUND, 'No Users found');
    return users;
}


module.exports = {
    addUser,
    getAllUsers
}