import express from "express";

interface RequestBody {
  name: string;
  userId: string;
}
export class CreateTodoRequest {
  private _requestBody: RequestBody;
  constructor(req: express.Request) {
    this._requestBody = req.body;
  }

  public get requestBody(): RequestBody {
    return this._requestBody;
  }
}
