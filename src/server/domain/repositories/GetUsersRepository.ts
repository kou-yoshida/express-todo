import { User } from "../entities/models/user";

export interface GetUsersRepository {
  /**
   * usersの一覧を取得する
   * @returns {User[]} usersの一覧
   */
  execute(): Promise<User[]>;
}
