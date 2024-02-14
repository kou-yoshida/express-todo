import { GetTodoRepository } from "../../domain/repositories/GetTodoRepository";

export class GetTodoService {
  private _getTodoRepository: GetTodoRepository;
  constructor(repository: GetTodoRepository) {
    this._getTodoRepository = repository;
  }

  async execute({ userId, id }: { userId: string; id: number }) {
    await this._getTodoRepository.execute(userId, id);
  }
}
