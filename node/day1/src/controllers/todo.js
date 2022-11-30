const todoModel = require("../models/todo");

const todoController = {
  getTodos: (req, res) => {
    try {
      const todos = todoModel.getTodos();
      return res.status(200).json({ todos });
    } catch (error) {
      /* return res.status(401).json(error); */
      throw new Error("Failed to get todos");
    }
  },

  postTodo: (req, res) => {
    try {
      const todo = req.body;
      todoModel.postTodo(todo);
      return res.status(200).json({
        message: "Todo created successfully",
      });
    } catch (error) {
      /*  return res.status(401).json(error); */
      throw new Error("Failed to post todo");
    }
  },
};

module.exports = todoController;
