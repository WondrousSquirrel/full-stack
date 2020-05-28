import winston from "winston";

// Опции для файла и консоли
const options = {
  file: {
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    filename: `./logs/api.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // не заканчивать работу при обработаных исключениях
});

// Morgan только консольный логгер, необходимо вручную записывать файл
logger.stream = {
  write: function (message, encoding) {
    logger.info(message);
  },
};

export default logger;
