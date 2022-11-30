const express = require("express");

const todoRouter = require("./src/routes/todo");
const userRouter = require("./src/routes/user");

const app = express();

// global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", todoRouter);
app.use("/", userRouter);

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
