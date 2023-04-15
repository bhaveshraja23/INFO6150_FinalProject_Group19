import React from "react";
// react router
import { Outlet } from "react-router-dom";
// styles
import "./styles.scss";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const AdminLayout = () => {
  return (
  <div class="flex-container">
        <div class="flex-left">
            <div class="logo">
            <img src={images.dineordel} alt="food img" />
            </div>

            <br /> <br /> <br />
            <div class="nav-item">
              <MaterialSymbol icon="Home" size={22} color="#8CBCF5" />  
              <Link to="/admin" className="link" color="$primary-light">Home</Link>
            </div>

            <div class="nav-item">
              <MaterialSymbol icon="Restaurant_menu" size={22} fill grade={-25} color="#8CBCF5" /> 
              <Link to="/admin/menu" className="link">Menu</Link>
            </div>

            <div class="nav-item">
              <MaterialSymbol icon="Table_bar" size={22} color="#8CBCF5"/> 
              <Link to="/admin/tables" className="link">Tables</Link>
            </div>

            <div class="nav-item">
              <MaterialSymbol icon="Group" size={22} color="#8CBCF5"/> 
              <Link to="/admin/staff" className="link">Staff</Link>
            </div>
            {/* <div class="nav-item">
              <MaterialSymbol icon="Settings" size={20} /> 
              <Link to="/admin/settings" className="link">Settings</Link>
            </div> */}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
