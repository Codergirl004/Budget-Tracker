import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"; // Add CSS for styling

const Profile = () => {
  const navigate = useNavigate();

  // Simulated admin data (replace this with data fetched from your backend)
  const [adminData, setAdminData] = useState({
    name: "Admin",
    mobileNumber: "1234567890",
    email: "admin@example.com",
  });

  // Fetch admin details (useEffect can call your backend to fetch real data)
  useEffect(() => {
    // Example API call to fetch profile data (uncomment and replace URL)
    // fetch("/api/profile")
    //   .then((res) => res.json())
    //   .then((data) => setAdminData(data))
    //   .catch((err) => console.error("Error fetching admin data:", err));
  }, []);

  // Function to navigate back to the dashboard
  const handleBackClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Admin Profile</h2>
        <div className="profile-item">
          <strong>Name:</strong> <span>{adminData.name}</span>
        </div>
        <div className="profile-item">
          <strong>Mobile Number:</strong> <span>{adminData.mobileNumber}</span>
        </div>
        <div className="profile-item">
          <strong>Email:</strong> <span>{adminData.email}</span>
        </div>
        <button className="back-button" onClick={handleBackClick}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Profile;
