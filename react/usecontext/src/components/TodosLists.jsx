/* import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

const TodosLists = ({ strikeThrough }) => {
  const { todos, error, loading, setTodos } = useContext(TodosContext);
  console.log(todos);

  const handleClick = (id) => {
    const newdata = todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      else return todo;
    });
    setTodos(newdata);
  };
  return (
    <div>
      {loading && <h1>Loading....</h1>}
      {!error &&
        todos?.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleClick(todo.id)}
            style={{
              textDecoration: todo.completed ? "red line-through" : "none",
            }}
          >
            {todo.title}
          </li>
        ))}
    </div>
  );
};

export default TodosLists; */

// Using useReducer Hook

import {
  COMPLETED_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../reducer/actions/todosAction";

const TodosLists = ({ todos, dispatch, setInput, setEdit }) => {
  const handleCompleted = (id) => {
    dispatch({ type: COMPLETED_TODO, payload: id });
  };

  const handleEdit = (todo) => {
    dispatch({ type: EDIT_TODO, payload: todo });
    setInput(todo.title);
    setEdit(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  return (
    <div>
      {todos?.map((todo, index) => (
        <li
          key={todo.id}
          style={{
            listStyle: "none",
            background: "#f0f0f0",
          }}
        >
          <h2
            onClick={() => handleCompleted(todo.id)}
            style={{
              textDecoration: todo.completed ? "red line-through" : "none",
            }}
          >
            {index + 1} - {todo.title}
          </h2>
          <button onClick={() => handleEdit(todo)}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default TodosLists;
