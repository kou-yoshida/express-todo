import express from "express";
import * as getUserController from "../controllers/getUsersController";
import { validate } from "../../validations/validate";
import { todoSchema } from "../../validations/schemas";

const router = express.Router();

// 全てのユーザーを取得する
router.get("/", getUserController.index);

export { router as usersRouter };
