import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Layout from "../container/Layout";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user"); // Default to 'user'

  const handleLogin = () => {
    if (userType === "admin") {
      navigate("admin-login");
      return;
    }
    if (userType === "user") {
      navigate("user-login");
      return;
    }
  };

  return (
    <div>
      <h1>Library Management System</h1>
      <label>
        User ID:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Login as:
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
