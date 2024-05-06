import express from "express";
import config from "./config";

async function run() {
  const app = express();

  await require("./loaders").default({ expressApp: app });

  app.listen(config.port, () => {});
}
