import { PrismaClient } from "@prisma/client";
import { Todo as TodoEntity } from "../../../domain/entities/models/todo";

export class Todo {
  /**
   * 作成
   */
  public static async create(params: TodoEntity) {
    const prisma = new PrismaClient();
    return await prisma.todo.create({
      data: {
        name: params.name,
        status: params.status,
        createdAt: params.createdAt,
        userId: params.userId,
      },
    });
  }

  /**
   * 更新
   */
  public static async update(params: TodoEntity) {
    const prisma = new PrismaClient();
    return await prisma.todo.update({
      where: {
        id: params.id,
        userId: params.userId,
      },
      data: {
        name: params.name,
        status: params.status,
        updatedAt: params.updatedAt,
      },
    });
  }

  /**
   * ユーザーIDで一覧取得
   */
  public static async findByUserId(userId: string) {
    const prisma = new PrismaClient();
    return await prisma.todo.findMany({
      where: {
        userId: userId,
      },
    });
  }

  /**
   * IDで取得
   */
  public static async findById(id: number, userId: string) {
    const prisma = new PrismaClient();
    return await prisma.todo.findFirst({
      where: {
        id: id,
        userId: userId,
      },
    });
  }

  /**
   * 削除
   */
  public static async delete(id: number, userId: string) {
    const prisma = new PrismaClient();
    return await prisma.todo.delete({
      where: {
        id: id,
        userId: userId,
      },
    });
  }
}
