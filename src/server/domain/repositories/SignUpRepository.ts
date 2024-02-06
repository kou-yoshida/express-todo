import { User } from "../entities/models/user";

export interface SignUpRepository {
  /**
   * サインアップ処理（ユーザー登録）
   */
  execute(createdUser: User): Promise<void>;
}
