import React from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* USER AVATAR */}
        <div className="avatar">
          <CgProfile size={110} />
        </div>

        {/* USER INFO */}
        <h1>{user?.name}</h1>
        <p className="email">{user?.email}</p>

        {/* USER STATS */}
        <div className="stats">
          <div>
            <h2>12</h2>
            <p>Orders</p>
          </div>
          <div>
            <h2>5</h2>
            <p>Favorites</p>
          </div>
          <div>
            <h2>4.9</h2>
            <p>Rating</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="profile-actions">
          <Link to="/edit-profile">
            <button className="edit-btn">Edit Profile</button>
          </Link>

          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
}
