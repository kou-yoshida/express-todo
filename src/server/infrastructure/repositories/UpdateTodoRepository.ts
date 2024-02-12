import { Todo } from "../../domain/entities/models/todo";
import { UpdateTodoRepository } from "../../domain/repositories/UpdateTodoRepository";
import { Todos } from "../database/models/todos";

export class UpdateTodoRepositoryImpl implements UpdateTodoRepository {
  constructor() {}

  public async execute(todo: Todo) {
    await Todos.update(todo);
  }
}
