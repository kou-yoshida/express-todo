import { AnyZodObject, ZodError } from "zod";
import express from "express";
import { ValidationError } from "../errors/validationError";

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
        const _error = error.flatten();
        next(
          new ValidationError(
            JSON.stringify(
              Object.keys(_error.fieldErrors)
                .map((key) => `${key}:${_error.fieldErrors[key]}`)
                .join(",")
            )
          )
        );
      }
    }
  };
