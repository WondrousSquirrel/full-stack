import app from "./app";
import { appConfig } from "./config";

app.listen(3000, () => {
  console.log(`${appConfig.name}:${appConfig.version} started on port 3000`);
});
