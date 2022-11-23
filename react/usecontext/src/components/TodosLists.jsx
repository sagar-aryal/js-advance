import { useContext } from "react";
import { TodosContext } from "../usecontext/TodosContext";

const TodosLists = () => {
  const { todos, error, loading } = useContext(TodosContext);
  console.log(todos);
  return (
    <div>
      {loading && <h1>Loading....</h1>}
      {!error && todos?.map((todo) => <li key={todo.id}>{todo.title}</li>)}
    </div>
  );
};

export default TodosLists;
