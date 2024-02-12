import { Todo } from "../entities/models/todo";

export interface UpdateTodoRepository {
  execute: (todo: Todo) => Promise<void>;
}
