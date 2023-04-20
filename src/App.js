import React from "react";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// axios configuration
import "./config/axios";
// layouts
import AdminLayout from "./layouts/admin-layout";
import StaffLayout from "./layouts/staff-layout";
// pages
import LandingPage from "./pages/customer/landing-page";
import CustomerMenuPage from "./pages/customer/menu-page";
import AboutPage from "./pages/customer/about-page";
import ReservationPage from "./pages/customer/reservation-page";
// non auth
import LoginPage from "./pages/log-in";
// import SignUpPage from "./pages/sign-up";
// admin
import DashboardPage from "./pages/admin/dashboard";
import MenuPage from "./pages/admin/menu";
import MenuItemPage from "./pages/admin/menu-item";
import TablesPage from "./pages/admin/tables";
import StaffPage from "./pages/admin/staff";
// staff
import StaffTablesPage from "./pages/staff/staff-root";
import StaffMenuPage from "./pages/staff/staff-tables";
//import CustomerFeedbackPage from "./pages/staff/staff-feedback";
// session storage
import { getSessionStorage } from "./session/session-storage";

function App() {
  // authentication layer
  const [isUserAuth, setIsUserAuth] = React.useState(null);
  const handleUserAuth = (value) => {};

  React.useEffect(() => {
    let publicRoutes = ["/", "/menu", "/about", "/reservation"];
    // let adminRoutes = ["/", "/menu", "/about", "/reservation"];
    // let staffRoutes = ["/", "/menu", "/about", "/reservation"];

    let pathName = window.location.pathname;
    if (!publicRoutes.includes(pathName)) {
      let currentUser = getSessionStorage() ? getSessionStorage() : null;
      if (currentUser) {
        setIsUserAuth(currentUser);
        if (
          currentUser.role.toUpperCase() === "ADMIN" &&
          !pathName.includes("admin")
        )
          window.location.href = "/admin";
        else if (
          currentUser.role.toUpperCase() === "STAFF" &&
          !pathName.includes("staff")
        )
          window.location.href = "/staff";
      } else {
        if (!pathName.includes("log-in")) window.location.href = "/log-in";
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<CustomerMenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reservation" element={<ReservationPage />} />

        {!isUserAuth && (
          <>
            <Route
              path="/log-in"
              element={<LoginPage handleAuth={handleUserAuth} />}
            />
            {/* <Route path="/sign-up" element={<SignUpPage />} /> */}
          </>
        )}

        {isUserAuth && isUserAuth.role.toUpperCase() === "ADMIN" && (
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="menu/:id" element={<MenuItemPage />} />
            <Route path="tables" element={<TablesPage />} />
            <Route path="staff" element={<StaffPage />} />
          </Route>
        )}

        {isUserAuth && isUserAuth.role.toUpperCase() === "STAFF" && (
          <Route path="/staff" element={<StaffTablesPage />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
