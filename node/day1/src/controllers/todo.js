const Todo = require("../models/todo");
const todoServices = require("../services/todo");

const TodoController = {
  getTodos: async (req, res) => {
    try {
      const { title, completed } = await req.body;
      const todos = new Todo({ title, completed });

      const allTodos = await todoServices.getAllTodos(todos);
      return res.status(200).json({
        message: "Todos fetched successfully",
        allTodos,
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
      const todo = new Todo({ title, completed });

      const addTodo = await todoServices.createTodo(todo);
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
