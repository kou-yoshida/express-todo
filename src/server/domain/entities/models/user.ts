import { randomUUID } from "crypto";

export type ModelParams = {
  name: string;
  email: string;
  id: string;
  password: string;
};

export type CreationParams = {
  name: string;
  email: string;
  password: string;
};

export type ReconstructParams = {
  name: string;
  email: string;
  id: string;
  password: string;
};

export class User {
  public constructor(
    private _name: string,
    private _email: string,
    private _id: string,
    private _password: string
  ) {}

  /**
   * ユーザー新規作成
   * @param {CreationParams} params
   * @returns {User} ユーザー
   */
  static create(params: CreationParams): User {
    const id = randomUUID();
    return new User(params.name, params.email, id, params.password);
  }

  /**
   * ユーザー再構築
   * @param {ReconstructParams} params
   * @returns {User} ユーザー
   */
  static reConstruct(params: ReconstructParams): User {
    return new User(params.name, params.email, params.id, params.password);
  }

  /**
   * ID
   */
  public get id(): string {
    return this._id;
  }

  /**
   * 名前
   */
  public get name(): string {
    return this._name;
  }

  /**
   * メールアドレス
   */
  public get email(): string {
    return this._email;
  }

  /**
   * パスワード
   */
  public get password(): string {
    return this._password;
  }
}
