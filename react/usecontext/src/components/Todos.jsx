import { useFetch } from "../hooks/useFetch";
import Form from "./Form";
import TodosLists from "./TodosLists";
import { TodosContext } from "../usecontext/TodosContext";
import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [data, error, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  useEffect(() => {
    setTodos((_) => data);
  }, [data]);

  return (
    <TodosContext.Provider value={(todos, error, loading)}>
      <Form />
      <TodosLists />
    </TodosContext.Provider>
  );
};

export default Todos;
