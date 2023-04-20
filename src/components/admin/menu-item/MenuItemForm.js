import React from "react";
// bootstrap
import { Form } from "react-bootstrap";

const MenuItemFormView = ({ data, handleData }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.menuitem.name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Menu Item"
          autoFocus
          value={data.name}
          onChange={(e) => handleData("name", e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.menuitem.description">
        <Form.Label>description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          autoFocus
          value={data.description}
          onChange={(e) => handleData("description", e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.menuitem.price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="price"
          autoFocus
          value={data.price}
          onChange={(e) => handleData("price", e.target.value)}
        />
      </Form.Group>
    </div>
  );
};

export default MenuItemFormView;
