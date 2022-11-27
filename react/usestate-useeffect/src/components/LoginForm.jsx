import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [input, setInput] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.userName === "admin" && input.password === "admin") {
      console.log("user is logged in", input);
    } else {
      console.log("wroung credientials");
    }

    setInput({
      userName: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <h1 className="title">User Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            value={input.userName}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
        <p>
          Haven't register ? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
