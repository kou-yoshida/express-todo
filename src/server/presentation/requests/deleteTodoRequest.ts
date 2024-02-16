import express from "express";
import { BadRequestError } from "../../errors/badRequestError";
import { ErrorMessage } from "../../errors/ErrorMessage";
interface RequestBody {
  userId: string;
  id: number;
}
export class DeleteTodoRequest {
  private _requestBdy: RequestBody;
  constructor(req: express.Request) {
    const userId = req.body.userId;
    const id = Number(req.params.id);

    if (!userId || isNaN(id))
      throw new BadRequestError(ErrorMessage.BAD_REQUEST);

    this._requestBdy = {
      userId,
      id,
    };
  }

  get requestBody() {
    return this._requestBdy;
  }
}
