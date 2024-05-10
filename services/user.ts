import { CustomError } from "../error";
import { FirebaseError } from "firebase/app";
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { IUserJoinDTO } from "interfaces/IUser";
import Container, { Inject, Service } from "typedi";

@Service()
export default class UserService {
  constructor(@Inject("logger") private logger) {}

  public async Login() {}

  public async Join(userJoinDTO: IUserJoinDTO): Promise<void> {
    const { email, password, name } = userJoinDTO;

    try {
      const auth: Auth = Container.get("fireauth");

      const result: UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (e) {
      if (e instanceof FirebaseError) {
        throw new CustomError(e.code.split("/")[1], e.name, 400);
      }

      this.logger.error(e);
      throw e;
    }
  }
}
