import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className="navbar">
      {/* LEFT: Logo */}
      <div className="left">
        <Link to="/" className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/857/857681.png"
            alt="logo"
          />
          <h2>FoodHub</h2>
        </Link>
      </div>

      {/* MIDDLE LINKS */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/offers">Offers</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* RIGHT SIDE ACTIONS */}
      <div className="right">
        <input type="text" placeholder="Search food..." className="search" />

        {user ? (
          <Link to="/profile" className="profile-btn">
            <CgProfile size={22} />
          </Link>
        ) : (
          <Link to="/register">
            <button className="login-btn">Register</button>
          </Link>
        )}

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
