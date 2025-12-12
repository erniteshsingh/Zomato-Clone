import React from "react";
import "./Profile.css";
import { useSelector, useDispatch } from "react-redux";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { logout } from "../../Feautures/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/logout", {
        withCredentials: true,
      });
      dispatch(logout()); 
      navigate("/login");
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
       
        <div className="avatar">
          <CgProfile size={110} />
        </div>

        
        <h1>{user?.name}</h1>
        <p className="email">{user?.email}</p>

        
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
        <div className="profile-actions">
          <button
            onClick={() => navigate("/edit-profile")}
            className="edit-btn"
          >
            Edit Profile
          </button>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
