/* import { useFetch } from "../hooks/useFetch";
import Form from "./Form";
import TodosLists from "./TodosLists";
import { TodosContext } from "../context/TodosContext";
import { useEffect, useState } from "react";

const Todos = () => {
  const [input, setInput] = useState({
    title: "",
  });
  const [todos, setTodos] = useState([]);
  const [data, error, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  useEffect(() => {
    setTodos((_) => data);
  }, [data]);

  const handleChange = (e) => {
    setInput((_) => ({ ...input, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      { ...input, completed: false, id: todos.length + 1 },
      ...prev,
    ]);
    setInput({
      title: "",
    });
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        error,
        loading,
        setTodos,
        input,
        handleChange,
        handleSubmit,
      }}
    >
      <Form />
      <TodosLists />
    </TodosContext.Provider>
  );
};

export default Todos;
 */

// Using useReducer Hook
import { useEffect, useReducer, useState } from "react";

import Form from "./Form";
import TodosLists from "./TodosLists";
import { useFetch } from "../hooks/useFetch";

import { todosReducer } from "../reducer/reducers/todosReducer";
import { initialTodos } from "../reducer/store/store";
import { GET_TODOS } from "../reducer/actions/todosAction";

const Todos = () => {
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [state, dispatch] = useReducer(todosReducer, initialTodos);

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  useEffect(() => {
    dispatch({ type: GET_TODOS, payload: data });
  }, [data]);

  return (
    <>
      <Form dispatch={dispatch} input={input} setInput={setInput} edit={edit} />
      <TodosLists
        todos={state}
        dispatch={dispatch}
        setInput={setInput}
        setEdit={setEdit}
      />
    </>
  );
};

export default Todos;
