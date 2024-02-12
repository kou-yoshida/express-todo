import { Todo } from "../entities/models/todo";

export interface GetTodosRepository {
  execute: (userId: string) => Promise<Todo[]>;
}
