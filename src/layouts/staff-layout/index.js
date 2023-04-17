import React from "react";
// react router
import { Outlet } from "react-router-dom";
// styles
import "./styles.scss";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const StaffLayout = () => {
  return (
    <div className="flex-container">
      <div className="flex-left">
        <div className="logo">
          <img src={images.dineordel} alt="food img" />
        </div>
        <br /> <br /> <br />
        <div className="nav-item">
          <span className="material-symbols-outlined">table_bar</span>
          {/* <MaterialSymbol icon="Table_bar" size={22} color="#8CBCF5" /> */}
          <Link to="/staff" className="link">
            Tables
          </Link>
        </div>
        <div className="nav-item">
          <span className="material-symbols-outlined">restaurant_menu</span>
          {/* <MaterialSymbol
            icon="Restaurant_menu"
            size={22}
            fill
            grade={-25}
            color="#8CBCF5"
          /> */}
          <Link to="/staff/staff-menu" className="link">
            Menu
          </Link>
        </div>
        {/* <div className="nav-item">
              <MaterialSymbol icon="Feedback" size={22} color="#8CBCF5" />  
              <Link to="/staff/feedback" className="link" color="$primary-light">Customer Feedback</Link>
            </div> */}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default StaffLayout;
