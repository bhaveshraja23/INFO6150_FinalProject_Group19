import React from "react";
// bootstrap
import { Form } from "react-bootstrap";

const StaffFormView = ({ data, handleData }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Staff Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          autoFocus
          value={data.name}
          onChange={(e) => handleData("name", e.target.value)}
        />
      </Form.Group>

      
    </div>
  );
};

export default StaffFormView;
