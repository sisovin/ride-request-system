const logger = require('./logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  res.status(500).json({
    message: 'Internal Server Error',
    error: err.message
  });
};

module.exports = errorHandler;
