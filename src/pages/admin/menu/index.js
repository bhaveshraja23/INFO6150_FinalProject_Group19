import React from "react";
//styles
import "./styles.scss";

const Menu = () => {
  return (
    <div class="flex-right">
      <div class="top-bar"></div>
      <div class="menu-container">
      <h3> Menu </h3>
      <div class="menu">
            <h4>Appetizers</h4>
            <p>6 Items</p>
        </div>
        <div class="menu">
            <h4>Startes</h4>
            <p>20 Items</p>
        </div>
        <div class="menu">
            <h4>Main Course</h4>
            <p>13 Items</p>
        </div>
        <div class="menu">
            <h4>Desserts</h4>
            <p>8 Items</p>
        </div>
      </div>
    </div> 
  );
};

export default Menu;
