import { GetTodosRepository } from "../../domain/repositories/GetTodosRepository";

export class GetTodosService {
  constructor(private _getTodosRepository: GetTodosRepository) {}

  async execute(userId: string) {
    return await this._getTodosRepository.execute(userId);
  }
}
