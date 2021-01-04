import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = (props) => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    sate: "",
    phone: "",
    error: "",
    success: false,
  });

  const {
    first_name,
    last_name,
    email,
    password,
    state,
    phone,
    error,
    success,
  } = values;

  const handleChange = (first_name) => (event) => {
    setValues({ ...values, error: false, [first_name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ first_name, last_name, email, password, state, phone })
      .then((data) => {
        console.log("DATA", data);
      })
      .catch((e) => console.log(e));
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">First Name</label>
              <input
                className="form-control"
                value={first_name}
                onChange={handleChange("first_name")}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Last Name</label>
              <input
                className="form-control"
                value={last_name}
                onChange={handleChange("last_name")}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                className="form-control"
                value={email}
                onChange={handleChange("email")}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-light">password</label>
              <input
                className="form-control"
                value={password}
                onChange={handleChange("password")}
                type="password"
              />
            </div>
            <div className="form-group">
              <label className="text-light">State</label>
              <input
                className="form-control"
                value={state}
                onChange={handleChange("state")}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Phone</label>
              <input
                className="form-control"
                value={phone}
                onChange={handleChange("phone")}
                type="text"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Signup Page" description="A signup for user">
      {signUpForm()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signup;
