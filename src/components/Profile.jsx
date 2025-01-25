import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [salary, setSalary] = useState("");
  const [expenditures, setExpenditures] = useState([{ name: "", amount: "" }]);
  const [savings, setSavings] = useState("");
  const [remainingAmount, setRemainingAmount] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleExpenditureChange = (index, field, value) => {
    const newExpenditures = [...expenditures];
    newExpenditures[index][field] = value;
    setExpenditures(newExpenditures);
  };

  const handleAddExpenditure = () => {
    setExpenditures([...expenditures, { name: "", amount: "" }]);
  };

  const handleRemoveExpenditure = (index) => {
    const newExpenditures = expenditures.filter((_, i) => i !== index);
    setExpenditures(newExpenditures);
  };

  const calculateRemainingAmount = () => {
    if (!salary || isNaN(salary) || salary <= 0) {
      setError("Please enter a valid salary.");
      return;
    }

    let totalExpenditure = 0;
    expenditures.forEach((expenditure) => {
      if (expenditure.amount && !isNaN(expenditure.amount)) {
        totalExpenditure += parseFloat(expenditure.amount);
      }
    });

    if (savings && !isNaN(savings)) {
      totalExpenditure += parseFloat(savings);
    }

    const remaining = salary - totalExpenditure;
    setRemainingAmount(remaining);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateRemainingAmount();
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Salary Input */}
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter your salary"
            required
          />
        </div>

        {/* Expenditure Inputs */}
        <div>
          <h3>Expenditures:</h3>
          {expenditures.map((expenditure, index) => (
            <div key={index} className="expenditure">
              <div className="form-group">
                <label htmlFor={`expenditureName-${index}`}>Expenditure Name:</label>
                <input
                  type="text"
                  id={`expenditureName-${index}`}
                  value={expenditure.name}
                  onChange={(e) =>
                    handleExpenditureChange(index, "name", e.target.value)
                  }
                  placeholder="Expenditure name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor={`expenditureAmount-${index}`}>Amount:</label>
                <input
                  type="number"
                  id={`expenditureAmount-${index}`}
                  value={expenditure.amount}
                  onChange={(e) =>
                    handleExpenditureChange(index, "amount", e.target.value)
                  }
                  placeholder="Amount"
                  required
                />
              </div>
              <button type="button" onClick={() => handleRemoveExpenditure(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddExpenditure}>
            Add Expenditure
          </button>
        </div>

        {/* Savings Input */}
        <div className="form-group">
          <label htmlFor="savings">Savings Needed:</label>
          <input
            type="number"
            id="savings"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            placeholder="Enter savings needed"
            required
          />
        </div>

        {/* Remaining Amount */}
        <div>
          {remainingAmount !== null && (
            <p>Remaining Amount for the month: ${remainingAmount.toFixed(2)}</p>
          )}
        </div>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
