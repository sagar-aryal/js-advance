import React from "react";

const Form = () => {
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
        <div className="input-box">
          <input
            type="text"
            name="address"
            placeholder="Address"
            autocomplete="off"
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="location"
            placeholder="Location"
            autocomplete="off"
          />
        </div>
        <div className="input-box">
          <input type="date" name="dateOfBirth" placeholder="DOB" />
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

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
