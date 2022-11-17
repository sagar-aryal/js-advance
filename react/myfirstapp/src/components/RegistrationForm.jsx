import React from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <div className="container">
      <h1 className="title">User Registration Form</h1>
      <form>
        <div className="input-box">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            autocomplete="off"
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            autocomplete="off"
          />
        </div>
        <div className="gender">
          <label className="gender-title">Gender</label>
          <div className="check-box">
            <input type="checkbox" class="radio" name="gender" value="male" />
            <label>Male</label>
          </div>
          <div className="check-box">
            <input type="checkbox" class="radio" name="gender" value="female" />
            <label>Female</label>
          </div>
          <div className="check-box">
            <input type="checkbox" class="radio" name="gender" value="others" />
            <label>Prefer not to say</label>
          </div>
        </div>
        <div className="input-box">
          <input type="date" name="dateOfBirth" placeholder="DOB" />
        </div>
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
          Registerd already ? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
