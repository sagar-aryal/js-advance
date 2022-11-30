const express = require("express");
const todosRouter = require("./src/routes/todos");

const app = express();

// global middlewares
app.use(express.json());
app.use(express.urlencoded());

// routes
app.use("/", todosRouter);

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
