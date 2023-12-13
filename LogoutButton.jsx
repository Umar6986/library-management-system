import React from "react";
import "./container.css";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/");
  };
  return (
    <>
      <button className="logout-button" onClick={onLogout}>
        Log Out
      </button>
    </>
  );
};

export default LogoutButton;
