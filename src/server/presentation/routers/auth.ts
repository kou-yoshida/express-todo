import express from "express";
import * as signUpController from "../controllers/signUpController";
import * as loginController from "../controllers/LoginController";
import { validate } from "../../validations/validate";
import { loginSchema, userCreateSchema } from "../../validations/schemas";

const router = express.Router();

/** サインアップ */
router.post("/signup", validate(userCreateSchema), signUpController.index);

/** ログイン */
router.post("/login", validate(loginSchema), loginController.index);

// /** ログアウト */
// router.post("/logout", logoutController.index);

// /** 認証情報取得 */
// router.get("/me", () => {});

// /** パスワードリセット */
// router.post("/password/reset", () => {});

// /** パスワード変更 */
// router.post("/password/change", () => {});

// /** ユーザー削除 */
// router.delete("/delete", () => {});

export { router as authRouter };
