import React from "react";
import { FaUserCircle, FaQuestionCircle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="profile-section">
          <FaUserCircle className="profile-icon" />
          <p>Welcome, User!</p>
        </div>
        <ul className="sidebar-menu">
          <li>
            <button className="sidebar-button">Profile</button>
          </li>
          <li>
            <button className="sidebar-button">Help</button>
          </li>
        </ul>
      </div>

      <div className="dashboard-content">
        <h1>Welcome to the Dashboard!</h1>
        <p>Here you can track your budget and manage your finances.</p>
      </div>
    </div>
  );
};

export default Dashboard;
