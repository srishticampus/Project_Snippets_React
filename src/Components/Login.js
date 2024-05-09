import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();

  const formValidating = (fieldName, value) => {
    if (!value.trim()) {
      return `${fieldName} is required`;
    }

    if (fieldName === "Email" && !value.endsWith("@gmail.com")) {
      return "Email must be a valid Gmail address";
    }

    if (fieldName === "Password") {
      const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
      if (!passwordRegex.test(value)) {
        return "Password must contain at least one number, one special character, and one capital letter";
      }
    }

    return "";
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    errors.email = formValidating("Email", data.email);
    errors.password = formValidating("Password", data.password);
    setErrors(errors);

    if (!errors.email && !errors.password) {
      alert("login successfully");
    }
  };

  return (
    <div className="container mt-5">
      <div
        className=" p-2 border "
        style={{
          margin: "1% 30%",
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "16px",
        }}
      >
        <form onSubmit={handleSubmit} className="p-3">
          <div className="mb-3">
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
          <div className="text-center">
            <button type="submit" className="btn btn-primary m-4">
              Login
            </button>
          </div>
          <div className="text">
            <h6>
              Don't have an account?{" "}
              <Link to="/register" className="text-decoration-none">
                Register
              </Link>
            </h6>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
