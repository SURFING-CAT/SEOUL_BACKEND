import { CustomError } from "../error";
import { FirebaseError } from "firebase/app";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { IUserJoinDTO, IUserLoginDTO } from "interfaces/IUser";
import Container, { Inject, Service } from "typedi";

@Service()
export default class UserService {
  constructor(@Inject("logger") private logger) {}

  public async Login(userLoginDTO: IUserLoginDTO) {
    const { email, password } = userLoginDTO;

    try {
      const auth: Auth = Container.get("fireauth");

      const data = await signInWithEmailAndPassword(auth, email, password);

      const accessToken = await data.user.getIdToken();
      const refreshToken = data.user.refreshToken;

      return { accessToken, refreshToken };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async Join(userJoinDTO: IUserJoinDTO): Promise<void> {
    const { email, password, name } = userJoinDTO;

    try {
      const auth: Auth = Container.get("fireauth");

      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      if (e instanceof FirebaseError) {
        throw new CustomError(e.code.split("/")[1], e.name, 400);
      }

      this.logger.error(e);
      throw e;
    }
  }
}
