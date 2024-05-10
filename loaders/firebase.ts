import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import config from "../config";

export default () => {
  const connection = initializeApp(config.firebase);
  const auth = getAuth();
  const store = getFirestore();

  return { connection, auth, store };
};
