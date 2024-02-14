import { DeleteTodoRepository } from "../../domain/repositories/DeleteTodoRepository";
import { Todos } from "../database/models/todos";

export class DeleteTodoRepositoryImpl implements DeleteTodoRepository {
  constructor() {}
  public async execute(userId: string, id: number): Promise<void> {
    await Todos.delete(id, userId);
  }
}
