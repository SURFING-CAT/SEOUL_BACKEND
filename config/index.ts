import dotenv from "dotenv";

process.env.NODE_ENV = "development";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: parseInt(process.env.PORT!, 3001),
  api: {
    prefix: "/api/v1",
  },
};
