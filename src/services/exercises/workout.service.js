const httpStatus = require('http-status');
const WODModel = require('../../models/exercise/wod.model');
const ApiError = require('../../utils/ApiError');
// const exerciseService = require("./exercises.service");
const addWODs = async (payload) => {
    const date = new Date(payload.date);
    const { collection } = payload;
    delete payload.collection;
    const _id = await WODModel[collection].findOne({ date }, '_id').exec();
    if (_id) {
        const updatePayload = await WODModel[collection].findByIdAndUpdate(
            _id,
            {
                ...payload,
            }
        );
        return updatePayload;
    }
    const exercise = new WODModel[collection](payload);
    await exercise.save();
    return exercise;
};

// No Update WOD service, use addWOD for updating the Workout
const updateWOD = () => {};

const getWOD = async ({ date, collection }) => {
    if (date === '') {
        return null;
    }
    const wod = await WODModel[collection]
        .findOne({ date: new Date(date) })
        .exec();
    if (!wod || wod.length === 0)
        throw new ApiError(httpStatus.NOT_FOUND, 'wod not found');
    return wod;
};

const getWODById = async ({ id, collection }) => {
    const wod = await WODModel[collection].findById(id).exec();
    if (!wod || wod.length === 0)
        throw new ApiError(httpStatus.NOT_FOUND, 'wod not found');
    return wod;
};

const deleteWOD = async ({ id, collection }) => {
    const wod = await WODModel[collection].findByIdAndRemove(id);
    if (!wod) throw new ApiError(httpStatus.NOT_FOUND, 'WOD not found');
    return wod;
};

module.exports = {
    addWODs,
    getWOD,
    updateWOD,
    getWODById,
    // getExercises,
    deleteWOD,
};
