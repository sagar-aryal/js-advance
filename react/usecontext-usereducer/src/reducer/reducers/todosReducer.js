import {
  GET_TODOS,
  COMPLETED_TODO,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from "../actions/todosAction";

const handleAddTodo = (state, title) => {
  // return in such that newly added todo stays at the top
  return [
    { id: state.length + 1, userID: 1, title: title, completed: false },
    ...state,
  ];
};

const handleDeleteTodo = (state, id) => {
  const todos = state.filter((todo) => todo.id !== id);
  return todos;
};

const handleEditTodo = (state, todo) => {
  return state.map((item) => (item.id === todo.id ? todo : item));
};

const handleCompletedTodo = (state, id) => {
  return state.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
};
export const todosReducer = (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return [...action.payload];
    case COMPLETED_TODO:
      return handleCompletedTodo(state, action.payload);
    case ADD_TODO:
      return handleAddTodo(state, action.payload);
    case EDIT_TODO:
      return handleEditTodo(state, action.payload);
    case DELETE_TODO:
      return handleDeleteTodo(state, action.payload);
    default:
      return state;
  }
};
