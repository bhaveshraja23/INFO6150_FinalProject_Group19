import React from "react";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// layouts
import AdminLayout from "./layouts/admin-layout";
// pages
// non auth
import LoginPage from "./pages/log-in";
import SignUpPage from "./pages/sign-up";
// admin
import DashboardPage from "./pages/admin/dashboard";
import MenuPage from "./pages/admin/menu";
import TablesPage from "./pages/admin/tables";
import StaffPage from "./pages/admin/staff";
// staff

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="tables" element={<TablesPage />} />
          <Route path="staff" element={<StaffPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;