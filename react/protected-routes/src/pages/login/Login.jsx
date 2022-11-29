import { useState } from "react";

const Login = () => {
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
    console.log(input);
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
