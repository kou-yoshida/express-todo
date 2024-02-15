import { Todo } from "../../domain/entities/models/todo";
import { UpdateTodoRepository } from "../../domain/repositories/UpdateTodoRepository";
import { Todo as TodoDB } from "../database/models/todos";

export class UpdateTodoRepositoryImpl implements UpdateTodoRepository {
  constructor() {}

  public async execute(todo: Todo) {
    await TodoDB.update(todo);
  }
}
