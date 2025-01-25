import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionForm from "./TransactionForm.jsx";
import TransactionList from "./TransactionList.jsx";
import Balance from "./Balance.jsx";

const BudgetTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/")
      .then((response) => {
        setTransactions(response.data.transactions);
        setBalance(response.data.balance);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addTransaction = (transaction) => {
    axios
      .post("http://127.0.0.1:5000/add", transaction)
      .then((response) => {
        setTransactions(response.data.transactions);
        setBalance(response.data.balance);
      })
      .catch((error) => console.error("Error adding transaction:", error));
  };

  return (
    <div className="container">
      <h1>Budget Tracker</h1>
      <Balance balance={balance} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default BudgetTracker;
