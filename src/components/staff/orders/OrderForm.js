import React from "react";
// bootstrap
import { Form } from "react-bootstrap";

const MenuItemFormView = ({ data, handleData }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.orderitem.user_name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          autoFocus
          value={data.user_name}
          onChange={(e) => handleData("user_name", e.target.value)}
        />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="exampleForm.orderitem.reserved_at"
      >
        <Form.Label>Reserved Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Reserved Date"
          autoFocus
          value={data.reserved_at}
          onChange={(e) => handleData("reserved_at", e.target.value)}
        />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="exampleForm.orderitem.reserved_time"
      >
        <Form.Label>Reserved Time</Form.Label>
        <Form.Control
          type="time"
          placeholder="Reserved Time"
          autoFocus
          value={data.reserved_time}
          onChange={(e) => handleData("reserved_time", e.target.value)}
        />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="exampleForm.orderitem.people_count"
      >
        <Form.Label>No of people</Form.Label>
        <Form.Control
          type="number"
          placeholder="No of people"
          autoFocus
          value={data.people_count}
          onChange={(e) => handleData("people_count", e.target.value)}
        />
      </Form.Group>
    </div>
  );
};

export default MenuItemFormView;
