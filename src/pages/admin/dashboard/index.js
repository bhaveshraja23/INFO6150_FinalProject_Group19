import React from "react";
//styles
import "./styles.scss";

const Dashboard = () => {
  return (
    <div className="flex-right">
      <div className="top-bar"></div>
      <div className="heading">
        <h3> Dashboard </h3>
      </div>
      <div className="metric-container">
        <div className="metric">
          <h3>2342</h3>
          <p>TOTAL ORDERS</p>
        </div>
        <div className="metric">
          <h3>2342</h3>
          <p>TOTAL ORDERS</p>
        </div>
        <div className="metric">
          <h3>2342</h3>
          <p>TOTAL ORDERS</p>
        </div>
        <div className="metric">
          <h3>2342</h3>
          <p>TOTAL ORDERS</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
