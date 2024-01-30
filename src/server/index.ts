import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", async (req, res) => {
  const name = "test";
  const email = "test-email";
  const passwordHash = "test-password";

  await prisma.users.create({
    data: {
      name,
      email,
      password_hash: passwordHash,
    },
  });

  const result = await prisma.users.findMany();
  res.send(result);
});

app.use("/user/1", (req, res) => {
  res.send("user1");
});

// 全てのtodoを取得する
app.get("/todos", async (req, res) => {
  const todos = await prisma.todos.findMany();
  res.send(todos);
});

// todoを作成する
app.post("/todos", async (req, res) => {
  // const { name, email, passwordHash } = req.body;
  // const name = "test";
  // const email = "test-email";
  // const passwordHash = "test-password";
  // prisma.todos.create({
  //   data: {
  //     name,
  //     email,
  //     password_hash: passwordHash,
  //   },
  // });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
