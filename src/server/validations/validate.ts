import { AnyZodObject, ZodError } from "zod";
import express from "express";
import { ValidationError } from "../errors/base/validationError";

export const validate =
  (schema: AnyZodObject) =>
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      await schema.parseAsync({ ...req.body, ...req.params });
      next();
      return;
    } catch (error) {
      if (error instanceof ZodError) {
        next(new ValidationError(error.message));
      }
    }
  };
