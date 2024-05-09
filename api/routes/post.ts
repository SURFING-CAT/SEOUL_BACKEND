import { Joi, celebrate } from "celebrate";
import { NextFunction, Router, Request, Response } from "express";
import Container from "typedi";
import { Logger } from "winston";

const route = Router();

export default (app: Router) => {
  app.use("/post", route);

  /***
   * 리스트 형식으로 모든 게시글을 받아옴
   */
  route.get(
    "/list",
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get("logger");
      try {
      } catch (e) {
        logger.error("⚠️ error : %o", e);
        return next(e);
      }
    }
  );

  /***
   * 해당 게시글의 상세 데이터를 가져옴
   */
  route.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    const logger: Logger = Container.get("logger");
    try {
    } catch (e) {
      logger.error("⚠️ error : %o", e);
      return next(e);
    }
  });

  /***
   * 게시글 작성
   */
  route.post(
    "/add",
    celebrate({
      body: Joi.object({ description: Joi.string().required() }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get("logger");
      try {
      } catch (e) {
        logger.error("⚠️ error : %o", e);
        return next(e);
      }
    }
  );

  /***
   * 게시글 삭제
   */
  route.delete(
    "/:id",
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get("logger");

      try {
      } catch (e) {
        logger.error("⚠️ error : %o", e);
        return next(e);
      }
    }
  );
};
