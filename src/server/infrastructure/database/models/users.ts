import { PrismaClient, Prisma } from "@prisma/client";
export class User {
  /**
   * 作成
   */
  public static async create(params: Prisma.UserCreateArgs["data"]) {
    const prisma = new PrismaClient();
    return await prisma.user.create({
      data: params,
    });
  }

  /**
   * 全件取得
   */
  public static findAll() {
    const prisma = new PrismaClient();
    return prisma.user.findMany();
  }

  /**
   * 1件取得（emailで検索）
   */
  public static findByEmail(email: string) {
    const prisma = new PrismaClient();
    return prisma.user.findFirst({
      where: {
        email: email,
      },
    });
  }
}
