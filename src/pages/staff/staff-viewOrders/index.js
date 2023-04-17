import React from "react";
//styles
import "./styles.scss";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMenu from "../../../components/popup-models/AddMenu";
import { Link } from "react-router-dom";

const StaffViewOrdersPage = () => {
  return (
    <div class="flex-right">
      <div class="top-bar"></div>
      <div className="heading">
          <h3> Table 1 Order</h3>
      </div>
      <div class="menu-container">
      <div class="menu">
      <div className="items">
            <p><b>Pasta</b></p>
        
            <p>Price</p>
            <p>Remove</p>
            </div>
        </div>
        <div class="menu">
        <div className="items">
            <p><b>Burger</b></p>
            <p>Price</p>
            <p>Remove</p>
            </div>
        </div>
        <div class="menu">
        <div className="items">
            <p> <b>French Fries</b></p>
            <p>Price</p>
            <p>Remove</p>
            </div>
        </div>
        <div class="menu">
        <div className="items">
            <p><b>Coke</b></p>
            <p>Price</p>
            <p>Remove</p>
            </div>
        </div>
        <div class="menu">
        <div className="items">
            <p><b>Order Total</b></p>
            <p><b>Total Price</b></p>
            </div>
        </div>
      </div>
    </div> 
  );
};

export default StaffViewOrdersPage ;
