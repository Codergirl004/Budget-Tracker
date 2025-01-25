import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TrackExpense from "./components/TrackExpense";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/track-expense" element={<TrackExpense />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
