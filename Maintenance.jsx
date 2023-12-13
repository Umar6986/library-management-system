import React from "react";
import LogoutButton from "./LogoutButton";

const Maintenance = () => {
  return (
    <div className="reports-container">
      <h2>Housekeeping</h2>
      <a href="admin-login">Home</a>
      <table>
        <thead>
          <tr>
            <th>Membership</th>
            <th>Books/Movies</th>
            <th>User Management</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button class="add-button">Add</button>
              <button class="update-button">Update</button>
            </td>
            <td>
              <button class="add-button">Add</button>
              <button class="update-button">Update</button>
            </td>
            <td>
              <button class="add-button">Add</button>
              <button class="update-button">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
      <LogoutButton />
    </div>
  );
};

export default Maintenance;
