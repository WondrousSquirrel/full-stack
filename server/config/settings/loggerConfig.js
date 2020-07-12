// Опции для файла и консоли
const loggerConfig = {
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

export default loggerConfig;
