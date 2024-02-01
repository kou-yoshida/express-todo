import express from "express";
import * as getUserController from "../controllers/getUsersController";

const router = express.Router();

// 全てのユーザーを取得する
router.get("/", getUserController.index);

// ユーザーを作成する
router.post("/", (req, res, next) => {});

// ユーザーを取得する
router.get("/:id", (req, res, next) => {});

// ユーザー情報を更新する
router.put("/:id", (req, res, next) => {});

// ユーザーを削除する
router.delete("/:id", (req, res, next) => {});

export { router as usersRouter };
