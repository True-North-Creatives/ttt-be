const config = require('../config/config');

const constructResetUrl = (token) => {
    return config.env === 'development'
        ? `https://localhost:8081/reset/${token}`
        : `https://auth.timetotrain.fit/reset/${token}`;
};

const constructActivateUrl = (token) => {
    return config.env === 'development'
        ? `https://localhost:8081/activate/${token}`
        : `https://auth.timetotrain.fit/activate/${token}`;
};

module.exports = {
    constructResetUrl,
    constructActivateUrl,
};
