const Todo = require("../models/todo");

const todoServices = {
  getAllTodos: async () => {
    const allTodos = await Todo.find();
    return allTodos;
  },

  createTodo: async (todo) => {
    const addTodo = await todo.save();
    return addTodo;
  },
};

module.exports = todoServices;
