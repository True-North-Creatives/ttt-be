const statusCodes = require('http-status');
const BodyStat = require('../../models/bodyStats');

async function getBodyParts() {
    return {
        code: statusCodes.OK,
        parts: [],
    };
}

module.exports = {
    getBodyParts,
};
