import express from "express";
import { PrismaClient } from "@prisma/client";
import { usersRouter } from "./presentation/routers/users";
import { todosRouter } from "./presentation/routers/todos";

const app = express();
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * User関連のroute
 */
app.use("/users", usersRouter);

/**
 * Todo関連のroute
 */
app.use("/todos", todosRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
