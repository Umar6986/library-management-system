import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./container.css";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    {
      id: 1,
      codeFrom: "SC(B/M)000001",
      codeTo: "SC(B/M)000004",
      category: "Science",
    },
    {
      id: 2,
      codeFrom: "EC(B/M)000001",
      codeTo: "EC(B/M)000004",
      category: "Economics",
    },
    {
      id: 3,
      codeFrom: "FC(B/M)000001",
      codeTo: "FC(B/M)000004",
      category: "Fiction",
    },
    {
      id: 4,
      codeFrom: "CH(B/M)000001",
      codeTo: "CH(B/M)000004",
      category: "Children",
    },
    {
      id: 5,
      codeFrom: "PD(B/M)000001",
      codeTo: "PD(B/M)000004",
      category: "Personal Development",
    },
  ]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <a href="reports">Reports</a>
        </li>
        <li>
          <a href="maintenance">Maintenance</a>
        </li>
        <li>
          <a href="transactions">Transaction</a>
        </li>
      </ul>
      <h2>Product Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Code No From</th>
            <th>Code No To</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.codeFrom}</td>
              <td>{product.codeTo}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminLoginPage;
