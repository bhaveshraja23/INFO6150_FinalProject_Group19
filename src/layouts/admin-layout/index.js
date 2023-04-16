import React from "react";
// react router
import { Outlet } from "react-router-dom";
// styles
import "./styles.scss";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex-container">
      <div className="flex-left">
        <div className="logo">
          <img src={images.dineordel} alt="food img" />
        </div>
        <br /> <br /> <br />
        <div className="nav-item">
          <span className="material-symbols-outlined">home</span>
          <Link to="/admin" className="link" color="$primary-light">
            Home
          </Link>
        </div>
        <div className="nav-item">
          <span className="material-symbols-outlined">restaurant_menu</span>
          <Link to="/admin/menu" className="link">
            Menu
          </Link>
        </div>
        <div className="nav-item">
          <span className="material-symbols-outlined">table_bar</span>
          <Link to="/admin/tables" className="link">
            Tables
          </Link>
        </div>
        <div className="nav-item">
          <span className="material-symbols-outlined">group</span>
          <Link to="/admin/staff" className="link">
            Staff
          </Link>
        </div>
        {/* <div className="nav-item">
              <MaterialSymbol icon="Settings" size={20} /> 
              <Link to="/admin/settings" className="link">Settings</Link>
            </div> */}
      </div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
