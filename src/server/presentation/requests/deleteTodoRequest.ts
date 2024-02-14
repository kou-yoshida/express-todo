import express from "express";
interface RequestBody {
  userId: string;
  id: number;
}
export class DeleteTodoRequest {
  private _requestBdy: RequestBody;
  constructor(req: express.Request) {
    this._requestBdy = {
      userId: req.body.userId,
      id: Number(req.params.id),
    };
  }

  get requestBody() {
    return this._requestBdy;
  }
}
