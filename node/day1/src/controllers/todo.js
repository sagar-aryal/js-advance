const Todo = require("../models/todo");

const TodoController = {
  getTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      return res.status(200).json({
        message: "Todos fetched successfully",
        todos,
      });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Failed to get todos", error: error });
    }
  },

  postTodo: async (req, res) => {
    try {
      const { title, completed } = await req.body;
      const todo = { title, completed };
      const addTodo = await new Todo({ ...todo }).save();
      return res.status(200).json({
        message: "Todo created successfully",
        todo: addTodo,
      });
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Failed to add new todo", error: error });
    }
  },
};

module.exports = TodoController;
