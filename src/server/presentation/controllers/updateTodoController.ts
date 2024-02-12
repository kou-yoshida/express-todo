import express from "express";
import { UpdateTodoService } from "../../usecase/services/updateTodoService";
import { UpdateTodoRepositoryImpl } from "../../infrastructure/repositories/UpdateTodoRepository";

export const index = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // const request =

  const service = new UpdateTodoService(new UpdateTodoRepositoryImpl());
  await service.execute("todo");
};
