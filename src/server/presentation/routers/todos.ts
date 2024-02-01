import express from "express";

const router = express.Router();

// 全てのtodoを取得する
router.get("/", (req, res, next) => {});

// todoを作成する
router.post("/", (req, res, next) => {});

// todoを取得する
router.get("/:id", (req, res, next) => {});

// todoを更新する
router.put("/:id", (req, res, next) => {});

// todoを削除する
router.delete("/:id", (req, res, next) => {});

export { router as todosRouter };
