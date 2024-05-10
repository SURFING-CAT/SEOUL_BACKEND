import Container from "typedi";
import LoggerInstance from "./logger";
import firebase from "firebase-admin";
import { Auth } from "firebase/auth";
import { FirebaseApp } from "firebase/app";
import { Firestore } from "firebase/firestore";

export default ({
  connection,
  auth,
  store,
  models,
}: {
  connection: FirebaseApp;
  auth: Auth;
  store: Firestore;
  models: {
    name: string;
    model: any;
  }[];
}) => {
  try {
    models.forEach((model) => Container.set(model.name, model.model));

    Container.set("firebase", connection);
    Container.set("fireauth", auth);
    Container.set("firestore", store);
    Container.set("logger", LoggerInstance);
  } catch (e) {
    LoggerInstance.error("⚠️ Error on dependency injector loader : %o", e);
    throw e;
  }
};
