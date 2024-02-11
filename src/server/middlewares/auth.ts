import express from "express";
import { UnauthorizedError } from "../errors/base/unauthorizedError";
import { verifyJwt } from "../usecase/jwt";
import { JwtPayload } from "jsonwebtoken";

export const index = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // tokenの取り出し
  const parts = req.headers.authorization
    ? req.headers.authorization.split(" ")
    : "";
  const token = parts.length === 2 && parts[0] === "Bearer" ? parts[1] : null;
  if (!token) throw new UnauthorizedError("token is required");

  // tokenの検証
  const decoded = verifyJwt(token) as JwtPayload;

  // userIdをセット
  req.body.userId = decoded.id;
  req.userId = decoded.id;

  next();
};
