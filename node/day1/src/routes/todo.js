const express = require("express");
const todoController = require("../controllers/todo");

const todoRouter = express.Router();

todoRouter.get("/todos", todoController.getTodos);
todoRouter.post("/todos", todoController.postTodo);

module.exports = todoRouter;
