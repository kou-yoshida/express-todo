import { Todo } from "../../domain/entities/models/todo";
import express from "express";

interface RequestBody extends Todo {}
export class UpdateTodoRequest {
  private _requestBody: RequestBody;
  constructor(req: express.Request) {
    this._requestBody = Todo.reConstruct({
      userId: req.body.userId,
      id: Number(req.params.id),
      status: req.body.status,
      name: req.body.name,
      createdAt: new Date(req.body.createdAt),
      updatedAt: new Date(req.body.updatedAt),
    });
  }

  get requestBody() {
    return this._requestBody;
  }
}
