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
          placeholder="Full Name"
          autoFocus
          value={data.fullName}
          onChange={(e) => handleData("name", e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Staff email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          autoFocus
          value={data.email}
          onChange={(e) => handleData("name", e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Staff Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          autoFocus
          value={data.password}
          onChange={(e) => handleData("name", e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Staff Role</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          autoFocus
          value={data.role}
          onChange={(e) => handleData("name", e.target.value)}
        />
      </Form.Group>

      
    </div>
  );
};

export default StaffFormView;
