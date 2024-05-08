import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import './register.css'
function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  let formValid;

  const formValidating = (fieldName, value) => {
    if (!value.trim()) {
      formValid = false;
      return `${fieldName} is required`;
    }
    if (data.email && data.password) {
      formValid = true;
    }
    return "";
  };

  const Navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });

    setErrors((preError) => ({ ...preError, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    errors.email = formValidating("Email", data.email);
    errors.password = formValidating("Password", data.password);

    setErrors(errors);
    if (data.email && data.password) {
      formValid = true;
    }
  };
  return (
    <div className="container mt-5">
    <div className="formdesign">
      <form onSubmit={handleSubmit}>
        <div className="">
          <h4 className="text-center mt-5">Sign in</h4>
          <label className="" htmlFor="form-controler-email">
            Email
          </label>
          <input
            type="email"
            className="form-control form-input"
            id="form-controler-email"
            placeholder=""
            required=""
            onChange={handleInputChange}
            name="email"
            value={data.email}
          />
          
          {errors.email && <div className="text-danger">{errors.email}</div>}
          <span className="glyphicon form-control-feedback" />
        </div>
        <div className="form-group has-feedback" id="form-group">
        <label className="" htmlFor="form-controler-password">
            Password
          </label>
          <input
            type="password"
            className="form-control form-input"
            id="form-controler-password m-3"
            placeholder=""
            required=""
            name="password"
            onChange={handleInputChange}
            value={data.password}
          />
          
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
          <span className="glyphicon form-control-feedback" />
        </div>
        <div className="text-center m-3"><button type="submit" className="btn btn-primary">
        Login
      </button></div>
        
        <div className="text">
          <p>
            Don't have an account? <Link to="/register" className="text-decoration-none">Register</Link>
          </p>
        </div>
      </form></div>
    </div>
  );
}

export default Login;
