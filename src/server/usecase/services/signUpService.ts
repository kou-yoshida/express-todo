import { CreationParams, User } from "../../domain/entities/models/user";
import { SignUpRepository } from "../../domain/repositories/SignUpRepository";
import { hashPassword } from "../passwordHash";

export class SignUpService {
  public constructor(private _signUpRepository: SignUpRepository) {}

  public async execute(params: CreationParams): Promise<User> {
    console.log(params);
    const _params = { ...params, password: hashPassword(params.password) };
    const createdUser = User.create(_params);
    await this._signUpRepository.execute(createdUser);

    return createdUser;
  }
}
