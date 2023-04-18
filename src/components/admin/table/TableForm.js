import React from "react";
// bootstrap
import { Form } from "react-bootstrap";

const TableFormView = ({ data, handleData, staff }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Table Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          autoFocus
          value={data.name}
          onChange={(e) => handleData("name", e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Default Staff</Form.Label>
        <Form.Select
          placeholder="Staff"
          value={data.defaultStaffId}
          onChange={(e) => handleData("defaultStaffId", e.target.value)}
        >
          <option value="null">Select staff</option>
          {staff &&
            staff.length > 0 &&
            staff.map((_staff, _idx) => (
              <option key={`staff-option-${_idx}`} value={_staff._id}>
                {_staff.fullName}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export default TableFormView;