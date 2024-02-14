import express from "express";
import { DeleteTodoRequest } from "../requests/deleteTodoRequest";
import { DeleteTodoService } from "../../usecase/services/deleteTodoService";
import { DeleteTodoRepositoryImpl } from "../../infrastructure/repositories/DeleteTodoRepositoryImpl";

export const index = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const request = new DeleteTodoRequest(req);

    const service = new DeleteTodoService(new DeleteTodoRepositoryImpl());

    await service.execute(request.requestBody);

    res.status(200).json({ message: "todo deleted" });
  } catch (error) {
    next(error);
  }
};
