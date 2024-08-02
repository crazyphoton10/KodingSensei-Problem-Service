const winston = require("winston");
require("winston-mongodb");
const { LOG_DB_URL } = require("./server.config");
const allowedTransports = [];

// The below transport configuration enables logging on the console
allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]: ${log.message}`
      )
    ),
  })
);

// The below transport configuration enables logging in mongodb database
allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "logs",
  })
);

// The below transport configuration enables logging in File
allowedTransports.push(
  new winston.transports.File({
    filename: `app.log`,
  })
);

const logger = winston.createLogger({
  format: winston.format.combine(
    //1st arg to define how we want our timestamp to come up
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    //2nd arg to combine method
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
    )
  ),
  transports: allowedTransports,
});

module.exports = logger;
