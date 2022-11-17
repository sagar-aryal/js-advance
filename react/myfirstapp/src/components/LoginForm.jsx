import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="container">
      <h1 className="title">User Login Form</h1>
      <form>
        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Email"
            autocomplete="off"
          />
        </div>
        <div className="input-box">
          <input type="password" name="password" placeholder="Password" />
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
