import "reflect-metadata";
import express from "express";
import config from "./config";
import LoggerInstance from "./loaders/logger";

async function run() {
  const app = express();

  await require("./loaders").default({ expressApp: app });

  app.listen(config.port, () => {
    LoggerInstance.info(
      `🚀 Express server is running : http://localhost:${config.port}`
    );
  });
}

run();
