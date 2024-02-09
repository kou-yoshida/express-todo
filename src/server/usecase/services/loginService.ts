import { UserDto } from "../../domain/dto/userDto";
import { LoginRepository } from "../../domain/repositories/LoginRepository";
import { ErrorMessage } from "../../errors/ErrorMessage";
import { NotExistError } from "../../errors/base/notExistError";
import { UnauthorizedError } from "../../errors/base/unauthorizedError";
import { createJwt } from "../jwt";
import { comparePassword } from "../passwordHash";

export class LoginService {
  constructor(private _loginRepository: LoginRepository) {}

  public async execute(email: string, password: string) {
    const user = await this._loginRepository.execute(email);

    // 認証
    const isVerify = comparePassword(password, user.password);
    if (!isVerify) throw new UnauthorizedError(ErrorMessage.INVALID_PASSWORD);

    // token発行
    const token = createJwt(user.id);

    return UserDto.createFromEntity(user, token);
  }
}
