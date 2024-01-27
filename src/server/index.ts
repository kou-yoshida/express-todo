import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/users", (req, res) => {
  res.send(["user1", "user2", "user3"]);
});
app.use("/user/1", (req, res) => {
  res.send("user1");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
