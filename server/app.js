import express from "express";

import morgan from "morgan";
import { logger } from "./config";
import router from "./routes";

const app = express();

app.use(morgan("combined", { stream: logger.stream }));
app.use("/api", router);

export default app;
