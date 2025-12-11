import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Register.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";

import registerUser from "../../Feautures/Auth/AuthActions.js";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(registerUser(formData));

    if (!res.success) {
      toast.error(res.message, {
        position: "top-center",
      });
      setTimeout(() => {
        setFormData({ name: "", email: "", password: "" });
        navigate("/login");
      }, 2000);
      return;
    }

    toast.success(res.message, {
      position: "top-center",
    });
    setFormData({ name: "", email: "", password: "" });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>
        <p className="subtitle">Join FoodHub and order your favourite meals!</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name} // <-- Controlled input
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email} // <-- Controlled input
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password} // <-- Controlled input
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>

          <button className="register-btn" type="submit">
            Register
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
