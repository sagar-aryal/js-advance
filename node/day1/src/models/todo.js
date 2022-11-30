let todos = [];

const todoModel = {
  getTodos: () => {
    return todos;
  },

  postTodo: (todo) => {
    todos.push(todo);
  },
};

module.exports = todoModel;
