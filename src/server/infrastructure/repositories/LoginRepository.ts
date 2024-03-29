import { User } from "../../domain/entities/models/user";
import { LoginRepository } from "../../domain/repositories/LoginRepository";
import { ErrorMessage } from "../../errors/ErrorMessage";
import { NotExistError } from "../../errors/notExistError";
import { User as UserDB } from "../database/models/users";

export class LoginRepositoryImpl implements LoginRepository {
  constructor() {}

  public async execute(email: string) {
    const user = await UserDB.findByEmail(email);
    if (!user) throw new NotExistError(ErrorMessage.USER_NOT_FOUND);

    return User.reConstruct({
      email: user.email,
      id: user.id,
      password: user.password_hash,
    });
  }
}
