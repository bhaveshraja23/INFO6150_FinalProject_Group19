import React from "react";
// react router
import { Outlet } from "react-router-dom";
// styles
import "./styles.scss";

const AdminLayout = () => {
  return (
    <div>
      <div>Admin Layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
