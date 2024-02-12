import express from "express";
import { SignUpRequest } from "../requests/signUpRequest";
import { SignUpService } from "../../usecase/services/signUpService";
import { SignUpRepositoryImpl } from "../../infrastructure/repositories/SignUpRepositoryImpl";
import { createJwt } from "../../usecase/jwt";
import { create } from "domain";

export const index = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    console.log(req.body);
    // requestBodyを取得
    const request = new SignUpRequest(req);
    // serviceを呼び出してロジックを実行
    const service = new SignUpService(new SignUpRepositoryImpl());
    const createdUser = await service.execute(request.requestBody);

    const token = createJwt(createdUser.id);

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};
