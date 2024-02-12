import { Todo } from "../entities/models/todo";

export interface GetTodoRepository {
  execute: (userId: string, id: number) => Promise<Todo>;
}
