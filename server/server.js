// Главный файл api

import app from "./app";
import dotenv from "dotenv";
import path from "path";

import { appConfig } from "./config";
import logger from "./services/logger";

dotenv.config();

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname + "/dist/index.html"));
  });
}

app.listen(PORT, () => {
  logger.info(
    `name: ${appConfig.name}, version: ${appConfig.version} has started: http://localhost:${PORT}/`
  );
});
