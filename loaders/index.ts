import { Application } from "express";
import expressLoader from "./express";
import firebaseLoader from "./firebase";
import Logger from "./logger";
import dependencyInjector from "./dependencyInjector";

export default async ({ expressApp }: { expressApp: Application }) => {
  const firebaseConnection = await firebaseLoader();
  Logger.info("📣 Firebase connected! ");

  const placeModel = {
    name: "placeModel",
    model: require("../models/place").default,
  };

  await dependencyInjector({
    firebaseConnection,
    models: [placeModel],
  });
  Logger.info("📣 Dependency Injector loaded! ");

  await expressLoader({ app: expressApp });
  Logger.info("📣 Express loaded! ");
};
