import express from "express";
import * as createTodoController from "../controllers/createTodoController";
import * as updateTodoController from "../controllers/updateTodoController";
import { validate } from "../../validations/validate";
import { todoSchema } from "../../validations/schemas";

const router = express.Router();

// 全てのtodoを取得する
router.get("/", (req, res, next) => {
  res.status(200).json({ message: "アクセス" + req.userId });
});

// todoを作成する
router.post("/", createTodoController.index);

// todoを取得する
router.get("/:id", (req, res, next) => {});

// todoを更新する
router.put("/:id", validate(todoSchema), updateTodoController.index);

// todoを削除する
router.delete("/:id", (req, res, next) => {});

export { router as todosRouter };
