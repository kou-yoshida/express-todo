import { PrismaClient } from "@prisma/client";
import { Todo } from "../../../domain/entities/models/todo";

export class Todos {
  /**
   * 作成
   */
  public static async create(params: Todo) {
    const prisma = new PrismaClient();
    return await prisma.todos.create({
      data: {
        name: params.name,
        status: params.status,
        created_at: params.createdAt,
        user_id: params.userId,
      },
    });
  }

  /**
   * 更新
   */
  public static async update(params: Todo) {
    const prisma = new PrismaClient();
    return await prisma.todos.update({
      where: {
        id: params.id,
        user_id: params.userId,
      },
      data: {
        name: params.name,
        status: params.status,
        updated_at: params.updatedAt,
      },
    });
  }

  /**
   * ユーザーIDで一覧取得
   */
  public static async findByUserId(userId: string) {
    const prisma = new PrismaClient();
    return await prisma.todos.findMany({
      where: {
        user_id: userId,
      },
    });
  }

  /**
   * IDで取得
   */
  public static async findById(id: number, userId: string) {
    const prisma = new PrismaClient();
    return await prisma.todos.findFirst({
      where: {
        id: id,
        user_id: userId,
      },
    });
  }
}
