import { Todo } from "../../domain/entities/models/todo";
import { GetTodosRepository } from "../../domain/repositories/GetTodosRepository";
import { Todo as TodoDB } from "../database/models/todos";

export class GetTodosRepositoryImpl implements GetTodosRepository {
  constructor() {}

  /**
   * userIdからTodo一覧を取得する
   */
  async execute(userId: string) {
    const result = await TodoDB.findByUserId(userId);

    return result.map((todo) => {
      return Todo.reConstruct({
        id: todo.id,
        status: todo.status,
        name: todo.name,
        createdAt: todo.createdAt,
        userId: todo.userId,
        updatedAt: todo.updatedAt || undefined,
      });
    });
  }
}
