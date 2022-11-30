let todos = [];

const todosModel = {
  getTodos: () => {
    return todos;
  },

  postTodo: (todo) => {
    todos.push(todo);
  },
};

module.exports = todosModel;
