import express from "express";
import * as signUpController from "../controllers/signUpController";
import * as loginController from "../controllers/LoginController";

const router = express.Router();

/** サインアップ */
router.post("/signup", signUpController.index);

/** ログイン */
router.post("/login", loginController.index);

// /** ログアウト */
// router.post("/logout", logoutController.index);

// /** 認証情報取得 */
// router.get("/me", () => {});

// /** パスワードリセット */
// router.post("/password/reset", () => {});

// /** パスワード変更 */
// router.post("/password/change", () => {});

/** ユーザー削除 */
router.delete("/delete", () => {});

export { router as authRouter };
