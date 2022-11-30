const express = require("express");
const todosController = require("../controllers/todos");

const todosRouter = express.Router();

todosRouter.get("/todos", todosController.getTodos);
todosRouter.post("/todos", todosController.postTodo);

module.exports = todosRouter;
