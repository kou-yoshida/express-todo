import { Todo } from "../../domain/entities/models/todo";
import { CreateTodoRepository } from "../../domain/repositories/CreateTodoRepository";

export class CreateTodoService {
  private _createTodoRepository: CreateTodoRepository;

  constructor(createTodoRepository: CreateTodoRepository) {
    this._createTodoRepository = createTodoRepository;
  }

  public async execute({ name, userId }: { name: string; userId: string }) {
    const todo = Todo.create({
      name,
      userId,
    });
    await this._createTodoRepository.execute(todo);
  }
}
