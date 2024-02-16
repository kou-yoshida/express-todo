import { Todo } from "../../domain/entities/models/todo";
import express from "express";
import { BadRequestError } from "../../errors/badRequestError";
import { ErrorMessage } from "../../errors/ErrorMessage";

interface RequestBody extends Todo {}
export class UpdateTodoRequest {
  private _requestBody: RequestBody;
  constructor(req: express.Request) {
    const userId = req.body.userId;
    const id = Number(req.params.id);
    const status = req.body.status;
    const name = req.body.name;
    const createdAt = req.body.createdAt;
    const updatedAt = req.body.updatedAt;

    if (!userId || isNaN(id) || !status || !name || !createdAt || !updatedAt)
      throw new BadRequestError(ErrorMessage.BAD_REQUEST);

    this._requestBody = Todo.reConstruct({
      id,
      userId,
      status,
      name,
      createdAt,
      updatedAt,
    });
  }

  get requestBody() {
    return this._requestBody;
  }
}
