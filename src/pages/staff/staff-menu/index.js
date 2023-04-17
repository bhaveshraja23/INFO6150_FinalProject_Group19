import React from "react";
//styles
import "./styles.scss";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMenu from "../../../components/popup-models/AddMenu";
import { Link } from "react-router-dom";

const StaffMenuPage = () => {
  return (
    <div className="flex-right">
      <div className="top-bar"></div>
      <div className="heading">

          <h3> Table 1 (Occupied) </h3>
          <Link to="/staff/staff-vieworder">
          <button  type="button" class="btn btn-primary">View Order</button>
          </Link>
      </div>
      <div class="menu-container">
      <div class="menu">
      <Link to="/staff/staff-feedback">
            <h4>Appetizers</h4></Link>
            <p>6 Items</p>
        </div>
        <div class="menu">
        <Link to="/staff/staff-feedback">
            <h4>Startes</h4></Link>
            <p>20 Items</p>
        </div>
        <div class="menu">
        <Link to="/staff/staff-feedback">
            <h4>Main Course</h4></Link>
            <p>13 Items</p>
        </div>
        <div class="menu">
        <Link to="/staff/staff-feedback">
            <h4>Desserts</h4></Link>
            <p>8 Items</p>

        <h3> Menu </h3>
      </div>
      <div className="menu-container">
        <div className="menu">
          <h4>Appetizers</h4>
          <p>6 Items</p>
        </div>
        <div className="menu">
          <h4>Startes</h4>
          <p>20 Items</p>
        </div>
        <div className="menu">
          <h4>Main Course</h4>
          <p>13 Items</p>
        </div>
        <div className="menu">
          <h4>Desserts</h4>
          <p>8 Items</p>

        </div>
      </div>
    </div>
  );
};

export default StaffMenuPage;
