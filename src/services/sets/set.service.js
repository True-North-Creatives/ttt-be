const repo = require('../../models/sets/set.model');

async function addSet(body) {
    const { user, workout, date, set } = body;
    if (set.unit !== 'kg') {
        // convert to kg
        set.weight = (set.weight / 2.205).toFixed(1);
        set.unit = 'kg';
    }
    const result = await repo.updateOne(
        { user, workout, date },
        { $push: { sets: set } },
        { upsert: true }
    );
    return {
        status: 200,
        set: result,
    };
}

async function updateWorkout(query, body) {
    const { user, workout, date } = query;
    const workoutSets = await repo.findOne({ user, workout, date });
    if (!workoutSets) {
        return {
            status: 404,
        };
    }
    Object.keys(body).forEach((key) => {
        workoutSets[key] = body[key];
    });

    await workoutSets.save();
    return {
        status: 200,
        workout: workoutSets,
    };
}

async function updateSet(id, update) {
    if (update.unit !== 'kg') {
        // convert to kg
        update.weight = Number((update.weight / 2.205).toFixed(1));
        update.unit = 'kg';
    }
    const workout = await repo.findOne({ 'sets.id': id }).lean();
    if (!workout) {
        return {
            status: 404,
        };
    }
    const prevValues = workout.sets.find((set) => set.id === id);
    const updatedSet = { ...prevValues, ...update };
    await repo.updateOne({ 'sets.id': id }, { $set: { 'sets.$': updatedSet } });
    return {
        status: 200,
        set: updatedSet,
    };
}

async function deleteSet(id) {
    const result = await repo.updateOne(
        { 'sets.id': id },
        { $pull: { sets: { id } } }
    );
    return {
        status: 200,
        result,
    };
}

async function getSet(query) {
    const { user, date, workout } = query;
    const sets = await repo.findOne({ user, date: new Date(date), workout });
    return {
        status: 200,
        sets,
    };
}

async function calculate() {
    // const setsQuery = [{ $match: {} }];

    // const history = await repo.aggregate([]);
    return {
        status: 200,
    };
}

module.exports = {
    addSet,
    getSet,
    updateSet,
    deleteSet,
    updateWorkout,
    calculate,
};
