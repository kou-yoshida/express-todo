import { DeleteTodoRepository } from "../../domain/repositories/DeleteTodoRepository";

export class DeleteTodoService {
  constructor(private _deleteTodoRepository: DeleteTodoRepository) {}

  async execute({ userId, id }: { userId: string; id: number }) {
    await this._deleteTodoRepository.execute(userId, id);
  }
}
