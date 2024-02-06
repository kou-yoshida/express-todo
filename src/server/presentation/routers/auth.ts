import express from "express";
import * as signUpController from "../controllers/signUpController";

const router = express.Router();

/** サインアップ */
router.post("/signup", signUpController.index);

/** ログイン */
router.post("/login", () => {});

/** ログアウト */
router.post("/logout", () => {});

/** 認証情報取得 */
router.get("/me", () => {});

/** パスワードリセット */
router.post("/password/reset", () => {});

/** パスワード変更 */
router.post("/password/change", () => {});

/** ユーザー削除 */
router.delete("/delete", () => {});

export { router as authRouter };
