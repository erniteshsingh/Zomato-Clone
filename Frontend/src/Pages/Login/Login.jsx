import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Feautures/Auth/AuthActions";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    setlogin({ ...login, [e.target.name]: e.target.value });
    const res = await dispatch(loginUser(login));

    if (!res.success) {
      toast.error(res.message, {
        position: "top-center",
      });
      return;
    }

    toast.success(res.message, {
      position: "top-center",
    });

    setTimeout(() => {
      setlogin({ name: "", email: "", password: "" });
      navigate("/");
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">
          Login to continue ordering your favourite food
        </p>

        <form onSubmit={loginHandler}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={login.email}
              onChange={(e) => setlogin({ ...login, email: e.target.value })}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={login.password}
              onChange={(e) => setlogin({ ...login, password: e.target.value })}
              required
            />
          </div>

          <button className="login-btn">Login</button>
        </form>

        <p className="register-text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
