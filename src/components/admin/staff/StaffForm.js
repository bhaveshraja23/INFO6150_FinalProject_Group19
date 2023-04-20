import React from "react";
// bootstrap
import { Form } from "react-bootstrap";

const StaffFormView = ({ data, handleData, update = true }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.staff.name">
        <Form.Label>Staff Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full Name"
          autoFocus
          value={data.fullName}
          onChange={(e) => handleData("fullName", e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.staff.email">
        <Form.Label>Staff email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          autoFocus
          value={data.email}
          onChange={(e) => handleData("email", e.target.value)}
          disabled={update === true ? true : false}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.staff.password">
        <Form.Label>Staff Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          autoFocus
          value={data.password}
          onChange={(e) => handleData("password", e.target.value)}
          disabled={update === true ? true : false}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.staff.role">
        <Form.Label>Staff Role</Form.Label>
        <Form.Select
          placeholder="Staff"
          value={data.role}
          onChange={(e) => handleData("role", e.target.value)}
        >
          <option value="null">Select staff</option>
          <option value="STAFF">Staff</option>
          <option value="CUSTOMER">Customer</option>
          <option value="ADMIN">Admin</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export default StaffFormView;
