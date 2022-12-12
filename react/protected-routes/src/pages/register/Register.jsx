import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { registerUser } from "../../redux/authSlice";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [input, setInput] = useState(initialState);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);
    dispatch(
      registerUser({
        firstname: input.firstname,
        lastname: input.lastname,
        email: input.email,
        password: input.password,
      })
    );
    setInput(initialState);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">Fitst Name</label>
      <input
        type="text"
        name="firstname"
        placeholder="Enter First Name..."
        value={input.firstname}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        name="lastname"
        placeholder="Enter Last Name.."
        value={input.lastname}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter Email..."
        value={input.email}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter Password..."
        value={input.password}
        onChange={handleChange}
        required
      />
      <label htmlFor="password">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password..."
        value={input.confirmPassword}
        onChange={handleChange}
        required
      />
      <input type="submit" value="Register" />
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default Register;
