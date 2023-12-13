import React from "react";
import LogoutButton from "./LogoutButton";

const Transactions = () => {
  return (
    <div className="reports-container">
      <h1>Transactions</h1>
      <a href="admin-login">Home</a>
      <ul>
        <li>
          <a href="book-available">Is book available</a>
        </li>
        <li>
          <a href="issue-book">Issue book</a>
        </li>
        <li>
          <a href="return-book">Return book</a>
        </li>
        <li>
          <a href="pay-fine">Pay Fine</a>
        </li>
      </ul>
      <br />
      <LogoutButton />
    </div>
  );
};

export default Transactions;
