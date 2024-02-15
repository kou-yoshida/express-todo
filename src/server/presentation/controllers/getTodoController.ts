import express from "express";
import { GetTodoService } from "../../usecase/services/getTodoService";
import { GetTodoRepositoryImpl } from "../../infrastructure/repositories/GetTodoRepository";

export const index = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const service = new GetTodoService(new GetTodoRepositoryImpl());

    const todo = await service.execute({
      userId: req.body.id,
      id: Number(req.params.id),
    });

    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};
