import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './register.css'
function Registration() {
    const navigate = useNavigate();
    const [data, setData] = useState({
      name: "",
      age: "",
      email: "",
      contact: "",
      experienceYear: "",
      password: "",
      profilePicture: null,
    });
  
    const [errors, setErrors] = useState({
      name: "",
      age: "",
      email: "",
      contact: "",
      experienceYear: "",
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
        e.preventDefault()
  
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
      }
  
      if (!data.contact.trim()) {
        formValid = false;
        errors.contact = "Contact number is required";
      } else if (data.contact.length < 10) {
        errors.contact = "Enter 10 digits valid number";
      }
  
      if (!data.experienceYear.trim()) {
        formValid = false;
        errors.experienceYear = "Experience field is required";
      }
  
      if (!data.password.trim()) {
        formValid = false;
        errors.password = "Password is required";
      } else if (data.password.length < 5) {
        errors.password = "Password should be atleast 6 characters";
      }
  
      setErrors(errors);

      if (
        data.name &&
        data.age &&
        data.email &&
        data.contact &&
        data.qualification &&
        data.experienceYear &&
        data.password
      ) {
        formValid = true;
      }
      if (formValid) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("age", data.age);
        formData.append("email", data.email);
        formData.append("contact", data.contact);
        formData.append("experienceYear", data.experienceYear);
        formData.append("password", data.password);
        formData.append("files", data.profilePicture);
  
        console.log('rp form ', formData)
  
      }}
  return (
    <div className="container mt-5">
    <h4 className="text-center">Sign up</h4>

    <div className=" ">
      <form onSubmit={handleSubmit} className="formdesign">
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
            <label>Experience</label>{" "}
          </div>
          <input
            type="number"
            placeholder="Experience"
            className="form-control m-2"

            name="experienceYear"
            value={data.experienceYear}
            onChange={handleInputChange}
          />

          {errors.experienceYear && (
            <div className="text-danger errortext">
              {errors.experienceYear}
            </div>
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

       
        <div className="files">
          <div className="label">
            {" "}
            <label>Profile Picture</label>{" "}
          </div>
          <input type="file" name="profilePicture" onChange={handleFileChange} />

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

        <div className="inbutton d-flex justify-content-center rpbtn">
          <button
            type="submit"
            className="btn btn-primary icon"

          >Sign UP
          </button>
        </div>
      </form>
    </div>
  </div>

  )
}

export default Registration
