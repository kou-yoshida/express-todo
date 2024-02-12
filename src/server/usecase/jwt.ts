import jwt from "jsonwebtoken";

const key = process.env.JWT_SECRET!;
const expiresIn = process.env.JWT_EXPIRES_IN! + "m";
const options: jwt.SignOptions = {
  algorithm: "HS256",
  expiresIn,
};

/**
 * jwtの生成関数
 */
export const createJwt = (id: string): string => {
  return jwt.sign({ id }, key, options);
};

/**
 * jwtの検証関数
 */
export const verifyJwt = (token: string) => {
  return jwt.verify(token, key);
};

/**
 * TODO:ログアウト処理 いつかやりたい
 * セッションで管理する必要がある
 *
 */
