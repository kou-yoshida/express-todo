import express from "express";

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
    this._requestBody = request.body;
  }

  public get requestBody(): RequestBody {
    return this._requestBody;
  }
}
