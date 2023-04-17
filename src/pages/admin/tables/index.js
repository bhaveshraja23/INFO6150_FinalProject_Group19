import React from "react";
//styles
import "./styles.scss";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTable from "../../../components/popup-models/AddTable";
import { Link } from "react-router-dom";

const Tables = () => {
  return (
    <div class="flex-right">
      <div class="top-bar"></div>
      <div className="heading">
        <h3> Tables </h3>
        <AddTable />
      </div>
      <div class="table-container">
        <div class="table">
        <Link to="/staff/staff-menu">
          <h4>Table 1</h4></Link>
            <p>Occupied</p>
        </div>
        <div class="table">
            <Link to="/staff/staff-menu">         
            <h4>Table 2</h4></Link> 
            <p>Occupied</p>
        </div>
        <div class="table">
            <Link to="/staff/staff-menu">         
            <h4>Table 3</h4></Link> 
            <p>Free</p>
        </div>
        <div class="table">
            <Link to="/staff/staff-menu">         
            <h4>Table 4</h4></Link> 
            <p>Free</p>
        </div>
      </div>
    </div> 
  );
};

export default Tables;
