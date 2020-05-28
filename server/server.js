// Главный файл api

import app from "./app";
import { appConfig } from "./config";
import { neutral } from "./config/messages";

app.listen(3000, () => {
  neutral(
    `name: ${appConfig.name}, version: ${appConfig.version} has started on port: 3000`
  );
});
