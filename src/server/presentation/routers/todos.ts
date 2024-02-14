import express from "express";
import * as createTodoController from "../controllers/createTodoController";
import * as updateTodoController from "../controllers/updateTodoController";
import * as getTodoController from "../controllers/getTodoController";
import * as getTodosController from "../controllers/getTodosController";
import * as deleteTodoController from "../controllers/deleteTodoController";
import { validate } from "../../validations/validate";
import {
  todoUpdateSchema,
  todoCreateSchema,
  todoDeleteSchema,
  todoGetListSchema,
  todoGetSchema,
} from "../../validations/schemas";

const router = express.Router();

// 全てのtodoを取得する
router.get("/", validate(todoGetListSchema), getTodosController.index);

// todoを作成する
router.post("/", validate(todoCreateSchema), createTodoController.index);

// todoを取得する
router.get("/:id", validate(todoGetSchema), getTodoController.index);

// todoを更新する
router.put("/:id", validate(todoUpdateSchema), updateTodoController.index);

// todoを削除する
router.delete("/:id", validate(todoDeleteSchema), deleteTodoController.index);

export { router as todosRouter };
