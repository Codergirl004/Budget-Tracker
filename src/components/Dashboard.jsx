import React from "react";
import { FaUser, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Import a CSS file for better styling

const Dashboard = () => {
  const navigate = useNavigate();

  // Navigate to Profile page
  const handleProfileClick = () => {
    navigate("/profile");
  };

  // Handle Logout
  const handleLogout = () => {
    // Clear any authentication data here (localStorage, sessionStorage, etc.)
    localStorage.removeItem("user");  // Assuming you store user info in localStorage
    alert("Logged out successfully!");

    // Redirect to the login page
    navigate("/"); 
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-item" onClick={handleProfileClick}>
          <FaUser size={24} />
          <span>Profile</span>
        </div>
        <div className="sidebar-item">
          <FaQuestionCircle size={24} />
          <span>Help</span>
        </div>

        {/* Place Logout button at the bottom */}
        <div className="sidebar-item logout-btn" onClick={handleLogout}>
          <FaSignOutAlt size={24} />
          <span>Logout</span>
        </div>
      </div>
      <div className="dashboard-content">
        <h1>Welcome to the Dashboard!</h1>
        <p>Here you can track your budget and manage your finances.</p>
      </div>
    </div>
  );
};

export default Dashboard;
