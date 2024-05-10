import Container from "typedi";
import LoggerInstance from "./logger";
import firebase from "firebase-admin";
import { Auth } from "firebase/auth";
import { FirebaseApp } from "firebase/app";

export default ({
  connection,
  auth,
  models,
}: {
  connection: FirebaseApp;
  auth: Auth;
  models: {
    name: string;
    model: any;
  }[];
}) => {
  try {
    models.forEach((model) => Container.set(model.name, model.model));

    Container.set("firebase", connection);
    Container.set("fireauth", auth);
    Container.set("logger", LoggerInstance);
  } catch (e) {
    LoggerInstance.error("⚠️ Error on dependency injector loader : %o", e);
    throw e;
  }
};
