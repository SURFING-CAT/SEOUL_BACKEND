import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import config from "../config";

export default () => {
  const connection = initializeApp(config.firebase);
  const auth = getAuth();

  return { connection, auth };
};
