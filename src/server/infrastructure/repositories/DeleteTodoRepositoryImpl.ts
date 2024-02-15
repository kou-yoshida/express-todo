import { DeleteTodoRepository } from "../../domain/repositories/DeleteTodoRepository";
import { Todo as TodoDB } from "../database/models/todos";

export class DeleteTodoRepositoryImpl implements DeleteTodoRepository {
  constructor() {}
  public async execute(userId: string, id: number): Promise<void> {
    await TodoDB.delete(id, userId);
  }
}
