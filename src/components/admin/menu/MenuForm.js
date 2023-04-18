import React from "react";
// bootstrap
import { Form } from "react-bootstrap";


const MenuFormView = ({ data, handleData }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Drinks"
          autoFocus
          value={data.name}
          onChange={(e) => handleData("name", e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>description</Form.Label>
        <Form.Control
          type="text"
          placeholder="item"
          autoFocus
          value={data.description}
          onChange={(e) => handleData("description", e.target.value)}
        />
      </Form.Group>
    </div>
  );
};

export default MenuFormView;
