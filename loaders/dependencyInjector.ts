import Container from "typedi";
import LoggerInstance from "./logger";
import firebase from "firebase-admin";

export default ({
  firebaseConnection,
  models,
}: {
  firebaseConnection: firebase.app.App;
  models: {
    name: string;
    model: any;
  }[];
}) => {
  try {
    models.forEach((model) => Container.set(model.name, model.model));

    Container.set("firebase", firebaseConnection);
    Container.set("logger", LoggerInstance);
  } catch (e) {
    LoggerInstance.error("⚠️ Error on dependency injector loader : %o", e);
    throw e;
  }
};
