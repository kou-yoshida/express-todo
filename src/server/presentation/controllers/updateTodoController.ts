import express from "express";
import { UpdateTodoService } from "../../usecase/services/updateTodoService";
import { UpdateTodoRepositoryImpl } from "../../infrastructure/repositories/UpdateTodoRepository";
import { UpdateTodoRequest } from "../requests/updateTodoRequest";

export const index = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const request = new UpdateTodoRequest(req);

    const service = new UpdateTodoService(new UpdateTodoRepositoryImpl());
    await service.execute(request.requestBody);

    res.status(200).json({ message: "todo updated" });
  } catch (error) {
    next(error);
  }
};
