import express from "express";
import { BadRequestError } from "../../errors/badRequestError";
import { ErrorMessage } from "../../errors/ErrorMessage";

interface RequestBody {
  name: string;
  userId: string;
}
export class CreateTodoRequest {
  private _requestBody: RequestBody;
  constructor(req: express.Request) {
    const name = req.body.name;
    const userId = req.body.userId;

    if (!userId || !name) throw new BadRequestError(ErrorMessage.BAD_REQUEST);

    this._requestBody = {
      name,
      userId,
    };
  }

  public get requestBody(): RequestBody {
    return this._requestBody;
  }
}
