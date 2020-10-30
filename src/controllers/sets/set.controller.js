const setService = require('../../services/sets');

async function addSet(req, res) {
    const { body } = req;
    const data = await setService.addSet(body);
    res.status(data.status).json(data);
}

module.exports = {
    addSet,
};
