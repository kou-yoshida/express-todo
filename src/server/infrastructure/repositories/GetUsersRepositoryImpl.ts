import { User } from "../../domain/entities/models/user";
import { GetUsersRepository } from "../../domain/repositories/GetUsersRepository";
import { User as UserDB } from "../database/models/users";
export class GetUserRepositoryImpl implements GetUsersRepository {
  constructor() {}

  async execute() {
    try {
      const _users = await UserDB.findAll();

      const users: User[] = _users.map((user) => {
        return new User(user.id, user.email, user.password_hash);
      });

      return users;
    } catch (error) {
      throw error;
    }
  }
}
