import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";



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

  const handleSubmit=(e)=>{
    e.preventDefault()
    let errors = {};
    errors.email = formValidating("Email", data.email);
    errors.password = formValidating("Password", data.password);

    setErrors(errors);
    if (data.email && data.password) {
      formValid = true;
    }
  }
  return (
    <div className="container mt-5">
    <form onSubmit={handleSubmit}>
        <div><h4 className="text-center">Sign in</h4>
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
            <label className="" htmlFor="form-controler-email">
                Email
            </label>
            {errors.email && <div className="text-danger">{errors.email}</div>}
            <span className="glyphicon form-control-feedback" />
        </div>
        <div className="form-group has-feedback" id="form-group">
            <input
                type="password"
                className="form-control form-input"
                id="form-controler-password"
                placeholder=""
                required=""
                name="password"
                onChange={handleInputChange}
                value={data.password}
            />
            <label className="" htmlFor="form-controler-password">
                Password
            </label>
            {errors.password && <div className="text-danger">{errors.password}</div>}
            <span className="glyphicon form-control-feedback" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <div className="text">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </form>
</div>  )
}

export default Login
