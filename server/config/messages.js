import chalk from "chalk";
import { logger } from ".";

/**
 * Сообщения для вывода информации в консоль
 * @param {string} message - информация для отображения
 */

const error = (message) => {
  logger.error(message);
  console.log(chalk.bold.red(message));
};
const warning = (message) => {
  logger.warning(message);
  console.log(chalk.bold.yellow(message));
};
const success = (message) => {
  logger.info(message);
  console.log(chalk.bold.green(message));
};
const neutral = (message) => {
  logger.info(message);
  console.log(chalk.hex("adf4ff")(message));
};

export { error, warning, success, neutral };
