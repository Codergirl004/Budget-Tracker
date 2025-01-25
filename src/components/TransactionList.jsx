import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <div className="transactions">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className={transaction.type === "Income" ? "income" : "expense"}
          >
            {transaction.type}: ${transaction.amount.toFixed(2)} (
            {transaction.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
