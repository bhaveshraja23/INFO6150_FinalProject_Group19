import React from "react";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// axios configuration
import "./config/axios";
// layouts
import AdminLayout from "./layouts/admin-layout";
import StaffLayout from "./layouts/staff-layout";
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
import StaffTablesPage from "./pages/staff/staff-tables";
import StaffMenuPage from "./pages/staff/staff-menu";
import CustomerFeedbackPage from "./pages/staff/staff-feedback";
import ViewOrderPage from "./pages/staff/staff-viewOrders";

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
        <Route path="/staff" element={<StaffLayout />}>
          <Route index element={<StaffTablesPage />} />
          <Route path="staff-menu" element={<StaffMenuPage />} />
          <Route path="staff-feedback" element={<CustomerFeedbackPage />} />
          <Route path="staff-vieworder" element={<ViewOrderPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
