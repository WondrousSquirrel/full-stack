// Главный файл api

import app from "./app";
import dotenv from "dotenv";
import path from "path";

import { appConfig } from "./config";
import { neutral } from "./config/messages";

dotenv.config();

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname + "/dist/index.html"));
  });
}

app.listen(PORT, () => {
  neutral(
    `name: ${appConfig.name}, version: ${appConfig.version} has started on port: ${PORT}`
  );
});
