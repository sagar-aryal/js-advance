const express = require("express");
const todosController = require("../controllers/todos");

const todosRouter = express.Router();

todosRouter.get("/", todosController.getTodos);
todosRouter.post("/", todosController.postTodo);

module.exports = todosRouter;
