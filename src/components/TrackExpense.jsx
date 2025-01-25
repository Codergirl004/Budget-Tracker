import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrackExpense.css";

const TrackExpense = () => {
  const [salary, setSalary] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [savings, setSavings] = useState("");
  const navigate = useNavigate();

  // Calculate remaining amount
  const remainingAmount = salary - expenses.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0) - savings;

  // Add a new expense
  const handleAddExpense = (e) => {
    e.preventDefault();

    if (!expenseName || !expenseAmount) {
      alert("Please fill in both fields!");
      return;
    }

    const newExpense = { name: expenseName, amount: parseFloat(expenseAmount) };
    setExpenses([...expenses, newExpense]);

    setExpenseName("");
    setExpenseAmount("");
  };

  // Remove an expense
  const handleRemoveExpense = (name) => {
    setExpenses(expenses.filter((expense) => expense.name !== name));
  };

  // Handle back navigation
  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="track-expense-container">
      <div className="track-expense-card">
        <h1>Track Your Expenses</h1>

        {/* Salary Input */}
        <div className="form-group">
          <label>Salary:</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter your salary"
          />
        </div>

        {/* Savings Input */}
        <div className="form-group">
          <label>Savings:</label>
          <input
            type="number"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            placeholder="Enter your savings"
          />
        </div>

        {/* Add Expense Form */}
        <div className="form-group">
          <label>Expense Name:</label>
          <input
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            placeholder="Enter expense name"
          />
        </div>
        <div className="form-group">
          <label>Expense Amount:</label>
          <input
            type="number"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            placeholder="Enter expense amount"
          />
        </div>
        <button onClick={handleAddExpense}>Add Expense</button>

        {/* Expense List */}
        <h2>Expense List</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.name}: ${expense.amount.toFixed(2)}
              <button onClick={() => handleRemoveExpense(expense.name)}>Remove</button>
            </li>
          ))}
        </ul>

        {/* Display Remaining Amount */}
        <h3>Remaining Amount: ${remainingAmount.toFixed(2)}</h3>

        {/* Back Button */}
        <button onClick={handleBack} className="back-button">
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default TrackExpense;
