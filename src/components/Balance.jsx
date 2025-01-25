import React from "react";

const Balance = ({ balance }) => {
  return (
    <div className="balance">
      <h2>Current Balance: ${balance.toFixed(2)}</h2>
    </div>
  );
};

export default Balance;
