import { PrismaClient, Prisma } from "@prisma/client";
export class Users {
  /**
   * 作成
   */
  public static async create(params: Prisma.UsersCreateArgs["data"]) {
    const prisma = new PrismaClient();
    return await prisma.users.create({
      data: params,
    });
  }

  /**
   * 全件取得
   */
  public static findAll() {
    const prisma = new PrismaClient();
    return prisma.users.findMany();
  }
}
