import express from "express";
import { LoginRequest } from "../requests/loginRequest";
import { LoginService } from "../../usecase/services/loginService";
import { LoginRepositoryImpl } from "../../infrastructure/repositories/LoginRepository";

export const index = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // リクエストを生成
  const request = new LoginRequest(req);
  // ユースケースを呼び出し、ロジック実行
  const service = new LoginService(new LoginRepositoryImpl());
  const userDto = service.execute(
    request.requestBody.email,
    request.requestBody.password
  );
  // レスポンスを生成
};
