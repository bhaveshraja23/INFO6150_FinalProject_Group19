import React from "react";
//styles
import "./styles.scss";

const Dashboard = () => {
  return (
    <div class="flex-right">
      <div class="top-bar"></div>
      <div className="heading">
          <h3> Dashboard </h3>
      </div>
      <div class="metric-container">
        <div class="metric">
            <h3>2342</h3>
            <p>TOTAL ORDERS</p>
        </div>
        <div class="metric">
            <h3>2342</h3>
            <p>TOTAL ORDERS</p>
        </div>
        <div class="metric">
            <h3>2342</h3>
            <p>TOTAL ORDERS</p>
        </div>
        <div class="metric">
            <h3>2342</h3>
            <p>TOTAL ORDERS</p>
        </div>
      </div>
    </div> 
  );
};

export default Dashboard;
