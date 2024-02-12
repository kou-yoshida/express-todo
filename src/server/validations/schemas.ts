import { z } from "zod";
import { TODO_STATUS } from "../domain/entities/models/todo";

/**
 * todo更新時のparamsスキーマ
 */
export const todoSchema = z.object({
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
