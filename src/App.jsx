import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TrackExpense from "./components/TrackExpense";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount"; // Added back
import Profile from "./components/Profile"; // Added back
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Login Page */}
          <Route path="/" element={<Login />} />
          
          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Track Expense Page */}
          <Route path="/track-expense" element={<TrackExpense />} />
          
          {/* Create Account Page */}
          <Route path="/create-account" element={<CreateAccount />} />
          
          {/* Profile Page */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
