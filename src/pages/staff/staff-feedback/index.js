import React from "react";
//styles
import "./styles.scss";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMenu from "../../../components/popup-models/AddMenu";
import { Link } from "react-router-dom";

const StaffFeedbackPage = () => {
  return (
    <div class="flex-right">
      <div class="top-bar"></div>
      <div className="heading">
          <h3> Table 1 (Occupied) / Appetizers</h3>
      </div>
      <div class="menu-container">
      <div class="menu">
     
            <p>Pasta</p>
        </div>
        <div class="menu">
        
            <p>Burger</p>
        </div>
        <div class="menu">
       
            <p>French Fries</p>
        </div>
        <div class="menu">
      
            <p>Coke</p>
        </div>
      </div>
    </div> 
  );
};

export default StaffFeedbackPage;
