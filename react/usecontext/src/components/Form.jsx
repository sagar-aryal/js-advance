import { useContext } from "react";
import { TodosContext } from "../usecontext/TodosContext";

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

export default Form;
