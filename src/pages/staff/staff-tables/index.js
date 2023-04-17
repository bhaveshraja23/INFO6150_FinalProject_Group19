import React from "react";
//styles
import "./styles.scss";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTable from "../../../components/popup-models/AddTable";

const StaffTablesPage = () => {
  return (
    <div className="flex-right">
      <div className="top-bar"></div>
      <div className="heading">
        <h3> Tables </h3>
      </div>
      <div className="table-container">
        <div className="table">
          <h4>Table 1</h4>
          <p>Occupied</p>
        </div>
        <div className="table">
          <h4>Table 2</h4>
          <p>Occupied</p>
        </div>
        <div className="table">
          <h4>Table 3</h4>
          <p>Free</p>
        </div>
        <div className="table">
          <h4>Table 4</h4>
          <p>Free</p>
        </div>
      </div>
    </div>
  );
};

export default StaffTablesPage;
