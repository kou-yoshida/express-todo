import bcrypt from "bcrypt";

/**
 * パスワードハッシュのストレッチング回数
 */
const SALT_ROUNDS = 10;

/**
 * パスワードをハッシュ化する関数
 * @param rawPassword {string}
 * @returns {string} ハッシュ化されたパスワード
 */
export const hashPassword = (rawPassword: string): string => {
  console.log(rawPassword, SALT_ROUNDS);
  return bcrypt.hashSync(rawPassword, SALT_ROUNDS);
};

/**
 * パスワードを比較する関数
 * @param rawPassword {string} ユーザーが入力したパスワード
 * @param hashedPassword {string} データベースに保存されているハッシュ化されたパスワード
 * @returns {boolean} パスワードが一致しているかどうか
 */
export const comparePassword = (
  rawPassword: string,
  hashedPassword: string
) => {
  return bcrypt.compareSync(rawPassword, hashedPassword);
};
