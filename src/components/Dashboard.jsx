import React from "react";
import { FaUser, FaQuestionCircle, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Import a CSS file for better styling

const Dashboard = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
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
      </div>
      <div className="dashboard-content">
        <h1>Welcome to the Dashboard!</h1>
        <p>Here you can track your budget and manage your finances.</p>
      </div>
    </div>
  );
};

export default Dashboard;
