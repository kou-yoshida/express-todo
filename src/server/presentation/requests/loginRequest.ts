import express from "express";

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
    this._requestBody = req.body;
  }

  public get requestBody(): RequestBody {
    return this._requestBody;
  }
}
