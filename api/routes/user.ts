import { NextFunction, Request, Response, Router } from "express";
import UserService from "../../services/user";
import Container from "typedi";
import { Logger } from "winston";

const route = Router();

export default (app: Router) => {
  app.use("/user", route);

  route.post(
    "/login",
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get("logger");

      try {
        const userServiceInstance = Container.get(UserService);
        const result = await userServiceInstance.Login(req.body);

        return res.status(200).json({ msg: "OK", data: { ...result } });
      } catch (e) {
        logger.error("⚠️ error : %o", e);
        return next(e);
      }
    }
  );

  route.post(
    "/join",
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get("logger");

      try {
        const userServiceInstance = Container.get(UserService);
        await userServiceInstance.Join(req.body);

        return res.status(201).json({ msg: "Done" });
      } catch (e) {
        logger.error("⚠️ error : %o", e);
        return next(e);
      }
    }
  );
};
