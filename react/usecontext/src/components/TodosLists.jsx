import { useContext } from "react";
import { TodosContext } from "../usecontext/TodosContext";

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

export default TodosLists;
