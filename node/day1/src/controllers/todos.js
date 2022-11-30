const todosModel = require("../models/todos");

const todosController = {
  getTodos: (req, res) => {
    const todos = todosModel.getTodos();
    return res.status(200).json({ todos });
  },

  postTodo: (req, res) => {
    const todo = req.body;
    todosModel.postTodo(todo);
    return res.status(200).json({
      message: "Todo created successfully",
    });
  },
};

module.exports = todosController;
