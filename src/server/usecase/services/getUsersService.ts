import { User } from "../../domain/entities/models/user";
import { GetUsersRepository } from "../../domain/repositories/GetUsersRepository";

export class GetUsersService {
  public constructor(
    private readonly _getUsersRepository: GetUsersRepository
  ) {}

  public async execute(): Promise<User[]> {
    try {
      const users = await this._getUsersRepository.execute();
      return users;
    } catch (error: unknown) {
      throw error;
    }
  }
}
