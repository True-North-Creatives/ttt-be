const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const httpStatus = require('http-status');
const config = require('./config/config');
const morgan = require('./config/morgan');
const routes = require('./routes/v1');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const logger = require('./config/logger');

const app = express();

// enable json data
app.use(express.json({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

if (config.env !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

// enable cors
app.use(cors({ credentials: true, origin: ['https://localhost:8081'] }));
app.options('*', cors());
app.use(express.json());
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.status(httpStatus.OK).send("Time to train");
// });

// v1 api routes
app.use('/api/v1', routes);

app.get('/api', (req, res) => {
    logger.debug('Health Monitor');
    res.status(httpStatus.OK).send('healthy');
});

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Route Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
