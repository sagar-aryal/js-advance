import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuth({ username: input.username, password: input.password });
    setInput({
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        name="username"
        value={input.username}
        onChange={handleChange}
        autoComplete="off"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={input.password}
        onChange={handleChange}
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
