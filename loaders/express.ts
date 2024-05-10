import cors from "cors";
import experss, {
  NextFunction,
  Request,
  Response,
  json,
  urlencoded,
} from "express";
import config from "../config";
import routes from "../api";
import { CustomError } from "../error";

export default ({ app }: { app: experss.Application }) => {
  app.get("/status", (req: Request, res: Response) => {
    res.status(200).end();
  });

  app.head("/status", (req: Request, res: Response) => {
    res.status(200).end();
  });

  app.enable("trust proxy");
  app.use(cors());
  app.use(require("method-override")());
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(config.api.prefix, routes());

  app.use((req, res, next) => {
    const err = new CustomError("Not Found", "NOT FOUND", 404);
    next(err);
  });

  /// error handlers
  app.use(
    (err: CustomError, req: Request, res: Response, next: NextFunction) => {
      if (err.name === "UnauthorizedError") {
        return res.status(err.status).send({ message: err.message }).end();
      }
      return next(err);
    }
  );

  app.use(
    (err: CustomError, req: Request, res: Response, next: NextFunction) => {
      res.status(err.status || 500);
      res.json({
        errors: {
          message: err.message,
        },
      });
    }
  );
};
