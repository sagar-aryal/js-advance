import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [input, setInput] = useState(initialState);

  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    setInput(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Email</label>
      <input
        type="email"
        name="email"
        placeholder=" Enter Email..."
        value={input.email}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter password..."
        value={input.password}
        onChange={handleChange}
        required
      />
      <input type="submit" value="Login" />
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default Login;
