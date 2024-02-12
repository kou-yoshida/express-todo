import { Todo } from "../../domain/entities/models/todo";
import { UpdateTodoRepository } from "../../domain/repositories/UpdateTodoRepository";

export class UpdateTodoService {
  constructor(private _updateTodoRepository: UpdateTodoRepository) {}

  async execute(todo: Todo) {
    await this._updateTodoRepository.execute(todo);
  }
}
