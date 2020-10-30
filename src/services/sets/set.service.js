const repo = require('../../models/sets/set.model');

async function addSet(body) {
    const { user, workout, day, exercise, set } = body;
    const result = await repo.updateOne(
        { user, workout, day, exercise },
        { $push: { sets: set } },
        { upsert: true }
    );
    return {
        status: 200,
        set: result,
    };
}

module.exports = {
    addSet,
};
