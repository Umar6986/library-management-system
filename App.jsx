import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminLogin from "./container/AdminLogin";
import UserLogin from "./container/UserLogin";
import Layout from "./container/Layout";
import AdminLoginPage from "./container/AdminLogin";
import UserLoginPage from "./container/UserLogin";
import Reports from "./container/Reports";
import Maintenance from "./container/Maintenance";
import Transactions from "./container/Transactions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="reports" element={<Reports />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="book-available" element={<Transactions />} />
          <Route path="issue-book" element={<Transactions />} />
          <Route path="return-book" element={<Transactions />} />
          <Route path="pay-fine" element={<Transactions />} />
          <Route
            path="admin-login"
            element={
              <Layout>
                <AdminLoginPage />
              </Layout>
            }
          />
          <Route
            path="user-login"
            element={
              <Layout>
                <UserLoginPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
