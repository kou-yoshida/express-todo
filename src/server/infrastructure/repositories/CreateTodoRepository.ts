import { Todo } from "../../domain/entities/models/todo";
import { CreateTodoRepository } from "../../domain/repositories/CreateTodoRepository";
import { Todos } from "../database/models/todos";

export class CreateTodoRepositoryImpl implements CreateTodoRepository {
  constructor() {}
  public async execute(todo: Todo): Promise<void> {
    await Todos.create(todo);
  }
}
