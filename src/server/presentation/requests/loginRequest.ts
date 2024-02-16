import express from "express";
import { BadRequestError } from "../../errors/badRequestError";
import { ErrorMessage } from "../../errors/ErrorMessage";

/**
 * ログインリクエスト
 
 */
interface RequestBody {
  email: string;
  password: string;
}
export class LoginRequest {
  private _requestBody: RequestBody;
  constructor(req: express.Request) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password)
      throw new BadRequestError(ErrorMessage.BAD_REQUEST);

    this._requestBody = req.body;
  }

  public get requestBody(): RequestBody {
    return this._requestBody;
  }
}
