import express from "express";
import { PrismaClient } from "@prisma/client";
import { usersRouter } from "./presentation/routers/users";
import { todosRouter } from "./presentation/routers/todos";
import { authRouter } from "./presentation/routers/auth";
import * as authMiddleware from "./middlewares/auth";

declare global {
  namespace Express {
    export interface Request {
      userId: string;
    }
  }
}

const app = express();

app.use(express.json());
app.use("/todos", authMiddleware.index);

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

/**
 * 認証関連のroute
 */
app.use("/auth", authRouter);

// Error handler
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
