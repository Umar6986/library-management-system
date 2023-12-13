import React from "react";
import LogoutButton from "./LogoutButton";

const Reports = () => {
  return (
    <div className="reports-container">
      <h2>Available Reports</h2>
      <a href="admin-login">Home</a>
      <ul>
        <li>Master List of Books</li>
        <li>Master List of Movies</li>
        <li>Master List of Membership</li>
        <li>Active Issues</li>
        <li>Overdue returns</li>
        <li>Pending issue Requests</li>
      </ul>
      <br />
      <LogoutButton />
    </div>
  );
};

export default Reports;
