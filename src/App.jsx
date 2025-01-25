import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CreateAccount from "./components/CreateAccount";
import Profile from "./components/Profile";  // Import Profile Component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/profile" element={<Profile />} />  {/* Add the Profile Route */}
      </Routes>
    </Router>
  );
};

export default App;
