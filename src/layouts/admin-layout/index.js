import React from "react";
// react router
import { Outlet } from "react-router-dom";
// styles
import "./styles.scss";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import {removeSessionStorage} from "../../session/session-storage";
import { useNavigate } from "react-router-dom";
//import { authService } from "../../services/auth.service";


const AdminLayout = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    
    removeSessionStorage();

    navigate("/log-in");
  };
  return (
    <div className="flex-container">
      <div className="flex-left">
        <div className="logo">
          <div className="resolve"></div>
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
        <div className="logout" onClick={handleLogout}>
          <span className="material-symbols-outlined">logout</span>
          <Link to="#" className="log-out">Logout</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
