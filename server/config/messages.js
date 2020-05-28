import chalk from "chalk";

/**
 * Сообщения для вывода информации в консоль
 * @param {string} message - информация для отображения
 */

const error = (message) => console.log(chalk.bold.red(message));
const warning = (message) => console.log(chalk.bold.yellow(message));
const success = (message) => console.log(chalk.bold.green(message));
const neutral = (message) => console.log(chalk.hex("adf4ff")(message));

export { error, warning, success, neutral };
