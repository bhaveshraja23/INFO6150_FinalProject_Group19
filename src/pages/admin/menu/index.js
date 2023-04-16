import React from "react";
//styles
import "./styles.scss";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMenu from "../../../components/popup-models/AddMenu";
import AddMenuItem from "../../../components/popup-models/AddMenuItem";

const Menu = () => {
  return (
    <div className="flex-right">
      <div className="top-bar"></div>
      <div className="heading">
        <h3> Menu </h3>
        <AddMenu />
      </div>
      <div className="menu-container">
        <div className="menu">
          <div className="items">
            <h4>Appetizers</h4>
            <p>6 Items</p>
          </div>
          <div className="item-button">
            <AddMenuItem />
          </div>
        </div>
        <div className="menu">
          <div className="items">
            <h4>Startes</h4>
            <p>20 Items</p>
          </div>
          <div className="item-button">
            <AddMenuItem />
          </div>
        </div>
        <div className="menu">
          <div className="items">
            <h4>Main Course</h4>
            <p>13 Items</p>
          </div>
          <div className="item-button">
            <AddMenuItem />
          </div>
        </div>
        <div className="menu">
          <div className="items">
            <h4>Desserts</h4>
            <p>8 Items</p>
          </div>
          <div className="item-button">
            <AddMenuItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
