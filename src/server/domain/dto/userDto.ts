import { User } from "../entities/models/user";
export class UserDto {
  private constructor(
    private _id: string,
    private _email: string,
    private _token: string
  ) {}

  public get id(): string {
    return this._id;
  }

  public get email(): string {
    return this._email;
  }

  public get token(): string {
    return this._token;
  }

  static createFromEntity(User: User, token: string) {
    return new UserDto(User.id, User.email, token);
  }
}
