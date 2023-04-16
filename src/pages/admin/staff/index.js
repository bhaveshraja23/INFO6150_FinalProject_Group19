import React from "react";
//styles
import "./styles.scss";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AddStaff from "../../../components/popup-models/AddStaff";

const Staff = () => {
  return (
    <div className="flex-right">
      <div className="top-bar"></div>
      <div className="heading">
        <h3> Staff </h3>
        <AddStaff />
      </div>
      <div className="staff-container">
        <div className="staff">
          <h5>Bhavesh</h5>
        </div>
        <div className="staff">
          <h5>Pavithra</h5>
        </div>
        <div className="staff">
          <h5>Saket</h5>
        </div>
        <div className="staff">
          <h5>tejaswi</h5>
        </div>
        <div className="staff">
          <h5>Nisha</h5>
        </div>
      </div>
    </div>
  );
};

export default Staff;
