export interface DeleteTodoRepository {
  execute: (userId: string, id: number) => Promise<void>;
}
