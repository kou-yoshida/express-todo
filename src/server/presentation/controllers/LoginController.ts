import express from "express";
import { LoginRequest } from "../requests/loginRequest";
import { LoginService } from "../../usecase/services/loginService";
import { LoginRepositoryImpl } from "../../infrastructure/repositories/LoginRepository";
import { getLoginResponse } from "../responses/loginResponse";

export const index = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    // リクエストを生成
    const request = new LoginRequest(req);
    // ユースケースを呼び出し、ロジック実行
    const service = new LoginService(new LoginRepositoryImpl());
    const userDto = await service.execute(
      request.requestBody.email,
      request.requestBody.password
    );

    const response = getLoginResponse(userDto);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
