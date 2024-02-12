import express from "express";
import { GetUsersService } from "../../usecase/services/getUsersService";
import { GetUserRepositoryImpl } from "../../infrastructure/repositories/GetUsersRepositoryImpl";

export const index = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const service = new GetUsersService(new GetUserRepositoryImpl());
    const result = await service.execute();

    res.status(200).json(result);
  } catch (error: unknown) {
    // エラー処理
    next(error);
  }
};
