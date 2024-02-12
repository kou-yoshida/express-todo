import { Todo } from "../../domain/entities/models/todo";
import express from "express";

interface RequestBody extends Todo {}
export class UpdateTodoRequest {
  private _requestBody: RequestBody;
  constructor(req: express.Request) {
    // this._requestBody = Todo.reConstruct({
    //   userId:req.body.userId,
    // })
  }
}
