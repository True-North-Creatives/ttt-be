const bodyStatsService = require('../../services/bodyStats');

async function getBodyParts(req, res) {
    const data = await bodyStatsService.getBodyParts();
    res.status(data.code).json(data);
}

async function addBodyStats(req, res) {
    const { body } = req;
    const data = await bodyStatsService.addStats(body);
    res.status(data.code).json(data);
}

async function getBodyStats(req, res) {
    const { query } = req;
    const data = await bodyStatsService.getStats(query);
    res.status(data.code).json(data);
}

module.exports = {
    getBodyParts,
    addBodyStats,
    getBodyStats,
};
