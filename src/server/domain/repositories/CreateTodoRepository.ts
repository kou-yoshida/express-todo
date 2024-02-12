import { Todo } from "../entities/models/todo";

export interface CreateTodoRepository {
  /**
   * Todoを作成する
   * @param todo
   */
  execute(todo: Todo): Promise<void>;
}
