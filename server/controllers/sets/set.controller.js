const setService = require('../../services/sets');

async function addSet(req, res) {
    const { body } = req;
    const data = await setService.addSet(body);
    res.status(data.status).json(data);
}

async function getSet(req, res) {
    const { query } = req;
    const data = await setService.getSet(query);
    res.status(data.status).json(data);
}

async function updateSet(req, res) {
    const { body } = req;
    const { id } = req.params;
    const data = await setService.updateSet(id, body);
    res.status(data.status).json(data);
}

async function updateWorkout(req, res) {
    const { body, query } = req;
    const data = await setService.updateWorkout(query, body);
    res.status(data.status).json(data);
}

async function deleteSet(req, res) {
    const { id } = req.params;
    const data = await setService.deleteSet(id);
    res.status(data.status).json(data);
}

async function calculate(req, res) {
    const { query } = req;
    const data = await setService.calculate(query);
    res.status(data.status).json(data);
}

module.exports = {
    addSet,
    getSet,
    updateSet,
    deleteSet,
    updateWorkout,
    calculate,
};
