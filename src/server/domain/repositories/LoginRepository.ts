import { User } from "../entities/models/user";

export interface LoginRepository {
  execute(email: string): Promise<User>;
}
