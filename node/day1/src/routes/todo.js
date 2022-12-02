const express = require("express");
const TodoController = require("../controllers/todo");

const TodoRouter = express.Router();

TodoRouter.get("/getTodos", TodoController.getTodos);
TodoRouter.post("/addTodo", TodoController.postTodo);

module.exports = TodoRouter;
