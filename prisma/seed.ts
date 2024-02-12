import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

try {
  (async function () {
    const user1 = await prisma.users.upsert({
      where: { email: "user1@user1.com" },
      update: {},
      create: {
        name: "user1",
        email: "user1@user1.com",
        password_hash: "password",
        id: "1",
      },
    });

    const user2 = await prisma.users.upsert({
      where: { email: "user2@user1.com" },
      update: {},
      create: {
        name: "user2",
        email: "user2@user1.com",
        password_hash: "password",
        id: "2",
      },
    });
  })();
} catch (e) {
  throw e;
} finally {
  async () => await prisma.$disconnect();
}
