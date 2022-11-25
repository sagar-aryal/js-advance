import { GET_TODOS, COMPLETED_TODO } from "../actions/todosAction";

const handleClick = (state, id) => {
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
      return handleClick(state, action.payload);
    default:
      return state;
  }
};
