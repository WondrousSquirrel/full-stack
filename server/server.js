// Главный файл api

import app from "./app";
import dotenv from "dotenv";

import { appConfig } from "./config";
import { neutral } from "./config/messages";

dotenv.config();

app.listen(process.env.PORT, () => {
  neutral(
    `name: ${appConfig.name}, version: ${appConfig.version} has started on port: ${process.env.PORT}`
  );
});
