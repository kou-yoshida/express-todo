import { User } from "../../domain/entities/models/user";
import { GetUsersRepository } from "../../domain/repositories/GetUsersRepository";
export class GetUserRepositoryImpl implements GetUsersRepository {
  constructor() {}

  async execute() {
    try {
      return [
        User.create({
          name: "test",
          email: "test",
          password: "test",
        }),
      ];
    } catch (error) {
      throw error;
    }
  }
}
