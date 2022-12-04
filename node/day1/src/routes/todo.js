const express = require("express");
const TodoController = require("../controllers/todo");
const verifyAuth = require("../middlewares/verifyAuth");

const TodoRouter = express.Router();

TodoRouter.get("/getTodos", verifyAuth, TodoController.getTodos);
TodoRouter.post("/addTodo", verifyAuth, TodoController.postTodo);

module.exports = TodoRouter;
