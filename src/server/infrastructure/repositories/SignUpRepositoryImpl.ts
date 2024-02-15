import { User } from "../../domain/entities/models/user";
import { User as UserDB } from "../../infrastructure/database/models/users";
import { SignUpRepository } from "../../domain/repositories/SignUpRepository";

export class SignUpRepositoryImpl implements SignUpRepository {
  public async execute(createdUser: User) {
    await UserDB.create({
      email: createdUser.email,
      password_hash: createdUser.password,
      id: createdUser.id,
    });
  }
}
