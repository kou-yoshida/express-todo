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

  /**
   * 1件取得（emailで検索）
   */
  public static findByEmail(email: string) {
    const prisma = new PrismaClient();
    return prisma.users.findFirst({
      where: {
        email: email,
      },
    });
  }
}
