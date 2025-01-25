import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";  // Navigate up one level to src, then import App.css

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demonstration
    const validUsername = "admin";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
      setError("");
      alert("Login Successful!");
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container"> {/* This applies the background image */}
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="error-message">{error}</p>}

          {/* Submit Button */}
          <button type="submit" className="login-button">Login</button>
        </form>

        {/* Create Account Link */}
        <div className="create-account-link">
          <p>
            Don't have an account? <a href="/create-account">Create one here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
