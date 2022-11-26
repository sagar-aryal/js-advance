/* import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

const Form = () => {
  const { input, handleChange, handleSubmit } = useContext(TodosContext);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todos..."
        name="title"
        value={input.title}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
};

export default Form; */

import { useState } from "react";
import { ADD_TODO } from "../reducer/actions/todosAction";

// Using useReducer Hook

const Form = ({ dispatch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput((_) => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, payload: input });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todos..."
        name="title"
        value={input}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
