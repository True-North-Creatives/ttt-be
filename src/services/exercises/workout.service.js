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

const getDatesBetweenDates = (startDate, endDate) => {
    let dates = [];
    const theDate = new Date(startDate);
    while (theDate < endDate) {
        dates = [...dates, new Date(theDate)];
        theDate.setDate(theDate.getDate() + 1);
    }
    dates = [...dates, endDate];
    return dates;
};

function mapSchedule(dates, workouts) {
    return dates.map((date) => {
        const dateString = new Intl.DateTimeFormat('en-IN', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
        }).format(date);
        const workout = workouts.find(
            (wk) => new Date(wk.date).getTime() === date.getTime()
        );

        if (workout) {
            const { _doc: doc } = workout;
            return {
                workout: doc._id,
                title: doc.displayName,
                date,
                dateString,
            };
        }
        return {
            date,
            dateString,
            title: 'rest',
        };
    });
}

const getDates = (date, days) => {
    const startDate = new Date(date);
    startDate.setDate(startDate.getDate() - days);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + days);
    return {
        startDate,
        endDate,
    };
};

const getSchedule = async (query) => {
    const { date, collection } = query;
    const days = parseInt(query.days, 10) || 3;
    const { startDate, endDate } = getDates(date, days);
    const dates = getDatesBetweenDates(startDate, endDate);
    const workouts = await WODModel[collection].find(
        {
            status: 'PUBLISHED',
            date: { $gte: startDate, $lte: endDate },
        },
        { displayName: 1, date: 1, _id: 1 }
    );
    const schedule = mapSchedule(dates, workouts);
    return {
        status: httpStatus.OK,
        schedule,
        // workouts,
    };
};

module.exports = {
    addWODs,
    getWOD,
    updateWOD,
    getWODById,
    // getExercises,
    deleteWOD,
    getSchedule,
};
