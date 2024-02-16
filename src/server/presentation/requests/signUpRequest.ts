import express from "express";
import { BadRequestError } from "../../errors/badRequestError";
import { ErrorMessage } from "../../errors/ErrorMessage";

/**
 * サインアップリクエスト
 */
interface RequestBody {
  email: string;
  password: string;
}

export class SignUpRequest {
  private _requestBody: RequestBody;

  public constructor(request: express.Request) {
    const email = request.body.email;
    const password = request.body.password;
    if (!email || !password)
      throw new BadRequestError(ErrorMessage.BAD_REQUEST);

    this._requestBody = request.body;
  }

  public get requestBody(): RequestBody {
    return this._requestBody;
  }
}
