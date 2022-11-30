const todosModel = require("../models/todos");

const todosController = {
  getTodos: (req, res) => {
    try {
      const todos = todosModel.getTodos();
      return res.status(200).json({ todos });
    } catch (error) {
      /* return res.status(401).json(error); */
      throw new Error("Failed to get todos");
    }
  },

  postTodo: (req, res) => {
    try {
      const todo = req.body;
      todosModel.postTodo(todo);
      return res.status(200).json({
        message: "Todo created successfully",
      });
    } catch (error) {
      /*  return res.status(401).json(error); */
      throw new Error("Failed to post todo");
    }
  },
};

module.exports = todosController;
