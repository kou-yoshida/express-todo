import { Todo } from "../../domain/entities/models/todo";
import { GetTodoRepository } from "../../domain/repositories/GetTodoRepository";
import { NotExistError } from "../../errors/notExistError";
import { Todo as TodoDB } from "../database/models/todos";

export class GetTodoRepositoryImpl implements GetTodoRepository {
  constructor() {}

  /**
   * userId,idを元に、todoを一件取得する
   */
  async execute(userId: string, id: number) {
    const _todo = await TodoDB.findById(id, userId);
    if (!_todo) throw new NotExistError("todo not found");

    return Todo.reConstruct({
      id: _todo?.id,
      userId: _todo?.userId,
      name: _todo.name,
      status: _todo.status,
      createdAt: _todo.createdAt,
      updatedAt: _todo.updatedAt || undefined,
    });
  }
}
