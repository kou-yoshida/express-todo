import { z } from "zod";
import { TODO_STATUS } from "../domain/entities/models/todo";

/**
 * todo更新時のparamsスキーマ
 */
export const todoUpdateSchema = z.object({
  id: z.string(),
  userId: z.string(),
  status: z.enum([
    TODO_STATUS.Completed,
    TODO_STATUS.Deleted,
    TODO_STATUS.Todo,
  ]),
  name: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

/**
 * todo作成時のparamsスキーマ
 */
export const todoCreateSchema = z.object({
  userId: z.string(),
  name: z.string(),
});

/**
 * todo削除時のparamsスキーマ
 */
export const todoDeleteSchema = z.object({
  id: z.string(),
  userId: z.string(),
});

/**
 * todo一覧取得時のparamsスキーマ
 */
export const todoGetListSchema = z.object({
  userId: z.string(),
});

/**
 * todo一件取得のparamsスキーマ
 */
export const todoGetSchema = z.object({
  userId: z.string(),
  id: z.number(),
});

/**
 * ユーザー作成（サインアップ）のparamsスキーマ
 */
export const userCreateSchema = z.object({
  email: z.string(),
  password: z.string(),
});

/**
 * ログインのparamsスキーマ
 */
export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});
