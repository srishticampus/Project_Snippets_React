import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
    password: "",
    profilePicture: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
    password: "",
    profilePicture: "",
  });
  let formValid = true;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setData({ ...data, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (!data.name.trim()) {
      formValid = false;
      errors.name = "Name is required";
    }

    if (!data.age.trim()) {
      formValid = false;
      errors.age = "Age is required";
    }

    if (!data.email.trim()) {
      formValid = false;
      errors.email = "Email is required";
    } else if (!data.email.endsWith("@gmail.com")) {
      formValid = false;
      errors.email = "Email must be a valid Gmail address";
    }

    if (!data.contact.trim()) {
      formValid = false;
      errors.contact = "Contact number is required";
    } else if (data.contact.length < 10) {
      errors.contact = "Enter a valid 10-digit contact number";
    }

    if (!data.password.trim()) {
      formValid = false;
      errors.password = "Password is required";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/.test(
        data.password
      )
    ) {
      formValid = false;
      errors.password =
        "Password should be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character";
    }

    setErrors(errors);

    if (data.name && data.age && data.email && data.contact && formValid) {
      alert("Registration successful");
      navigate("/login");
    }
  };

  return (
    <div className="container mt-5">
      <div className=" ">
        <form
          onSubmit={handleSubmit}
          className="p-4"
          style={{
            margin: "1% 28%",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "16px",
          }}
        >
          <h4 className="text-center">Sign Up</h4>

          <div className="input-box">
            <div className="label">
              {" "}
              <label>Name</label>{" "}
            </div>
            <input
              type="text"
              placeholder="Name"
              value={data.name}
              name="name"
              className="form-control m-2"
              onChange={handleInputChange}
            />

            {errors.name && (
              <div className="text-danger errortext">{errors.name}</div>
            )}
          </div>

          <div className="input-box">
            <div className="label">
              {" "}
              <label>Age</label>{" "}
            </div>
            <input
              type="number"
              placeholder="Age"
              name="age"
              className="form-control m-2"
              value={data.age}
              onChange={handleInputChange}
            />

            {errors.age && (
              <div className="text-danger errortext">{errors.age}</div>
            )}
          </div>

          <div className="input-box">
            <div className="label">
              {" "}
              <label>Email</label>{" "}
            </div>
            <input
              type="email"
              value={data.email}
              placeholder="Email"
              name="email"
              className="form-control m-2"
              onChange={handleInputChange}
            />

            {errors.email && (
              <div className="text-danger errortext">{errors.email}</div>
            )}
          </div>

          <div className="input-box">
            <div className="label">
              {" "}
              <label>Contact</label>{" "}
            </div>
            <input
              type="number"
              value={data.contact}
              placeholder="Contact Number"
              name="contact"
              className="form-control m-2"
              onChange={handleInputChange}
            />

            {errors.contact && (
              <div className="text-danger errortext">{errors.contact}</div>
            )}
          </div>
          <div className="input-box">
            <div className="label">
              {" "}
              <label>Password</label>{" "}
            </div>
            <input
              type="password"
              className="form-control m-2"
              placeholder="Password"
              value={data.password}
              name="password"
              onChange={handleInputChange}
            />

            {errors.password && (
              <div className="text-danger errortext">{errors.password}</div>
            )}
          </div>

          <div className="mt-3">
            {" "}
            <label>Profile Picture</label>{" "}
            <input
              className="m-2 p-3"
              type="file"
              name="profilePicture"
              onChange={handleFileChange}
              required
            />
            {errors.profilePicture && (
              <div className="form-control m-2 text-danger errortext">
                {errors.profilePicture}
              </div>
            )}
          </div>

          <div className="text m-3">
            <h6>
              Already have an account? <Link to="/login">Login now</Link>
            </h6>
          </div>

          <div className="inbutton d-flex justify-content-center">
            <button type="submit" className="btn btn-primary icon">
              Sign UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
