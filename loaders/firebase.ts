import firebase from "firebase-admin";
import config from "../config";

export default (): firebase.app.App => {
  const connection = firebase.initializeApp(config.firebase);

  return connection;
};
