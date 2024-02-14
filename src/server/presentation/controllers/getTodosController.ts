import express from "express";
import { GetTodosService } from "../../usecase/services/getTodosService";
import { GetTodosRepositoryImpl } from "../../infrastructure/repositories/GetTodosRepository";
export const index = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const service = new GetTodosService(new GetTodosRepositoryImpl());
    const result = await service.execute(req.body.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
