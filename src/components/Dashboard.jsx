import React from "react";
import { FaUser, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
    localStorage.removeItem("user"); // Assuming you store user info in localStorage
    alert("Logged out successfully!");

    // Redirect to the login page
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-item" onClick={handleProfileClick}>
          <FaUser size={24} />
          <span>Profile</span>
        </div>
        <div className="sidebar-item">
          <FaQuestionCircle size={24} />
          <span>Help</span>
        </div>

        {/* Logout Button */}
        <div className="sidebar-item logout-btn" onClick={handleLogout}>
          <FaSignOutAlt size={24} />
          <span>Logout</span>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        <h1>Welcome to Budget Tracker!</h1>
        <p>"Your partner in smarter spending."</p>

        {/* Existing features (if any) */}
        <div className="dashboard-box">
          <h2>Feature 1</h2>
          <p>Description of Feature 1</p>
        </div>

        {/* New "Track Your Expense" Box */}
        <div className="dashboard-box">
          <h2>Track Your Expense</h2>
          <p>Manage your salary, expenses, and savings effectively.</p>
          <Link to="/track-expense">
            <button>Go to Expense Tracker</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
