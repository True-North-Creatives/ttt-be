const bodyStatsService = require('../../services/bodyStats');

async function getBodyParts(req, res) {
    const data = await bodyStatsService.getBodyParts();
    res.status(data.code).json(data);
}

module.exports = {
    getBodyParts,
};
