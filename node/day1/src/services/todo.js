const Todo = require("../models/todo");

const todoServices = {
  getAllTodos: async () => {
    return Todo.find();
  },

  createTodo: async (todo) => {
    return todo.save();
  },
};

module.exports = todoServices;
