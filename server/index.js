const mongoose = require('mongoose');
const http = require('http');
const fs = require('fs');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
// openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
const privateKey = fs.readFileSync('./server/certificate/key.pem', 'utf8');
const certificate = fs.readFileSync('./server/certificate/cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };
const httpServer = http.createServer(app);
let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
    logger.info('Connected to MongoDB');
    server = httpServer.listen(process.env.PORT || config.port, () => {
        logger.info(`Listening to port ${config.port}`);
    });
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    logger.info('SIGTERM received');
    if (server) {
        server.close();
    }
});
