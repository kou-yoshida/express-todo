import express from "express";
import { CreateTodoRequest } from "../requests/createTodoRequest";
import { CreateTodoRepositoryImpl } from "../../infrastructure/repositories/CreateTodoRepository";
import { CreateTodoService } from "../../usecase/services/createTodo";

export const index = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const request = new CreateTodoRequest(req);

    const service = new CreateTodoService(new CreateTodoRepositoryImpl());

    await service.execute({
      name: request.requestBody.name,
      userId: request.requestBody.userId,
    });
    res.status(200).json({ message: "todo created" });
  } catch (error) {
    next(error);
  }
};
