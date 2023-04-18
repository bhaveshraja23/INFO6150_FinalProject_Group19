import React from "react";
import { Form, Button } from "react-bootstrap";
import { createMenuItem, updateMenuItem } from "../../../services/admin/menu-items";

const MenuItemForm = ({ menuItem, setMenuItem, setMenuItems, isEdit }) => {
  const [formLoader, setFormLoader] = React.useState(false);

  const handleFormData = (key, value) => {
    setMenuItem((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormLoader(true);
    if (isEdit) {
      try {
        await updateMenuItem(menuItem._id, menuItem);
        setMenuItems((prevData) => prevData.map((item) => item._id === menuItem._id ? menuItem : item));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await createMenuItem(menuItem);
        setMenuItems((prevData) => [...prevData, menuItem]);
      } catch (error) {
        console.log(error);
      }
    }
    setMenuItem({
      name: "",
      description: "",
      price: 0,
      category: "",
      available: true,
    });
    setFormLoader(false);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" required value={menuItem.name} onChange={(e) => handleFormData("name", e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" required value={menuItem.description} onChange={(e) => handleFormData("description", e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter price" required value={menuItem.price} onChange={(e) => handleFormData("price", e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter category" required value={menuItem.category} onChange={(e) => handleFormData("category", e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Available" checked={menuItem.available} onChange={(e) => handleFormData("available", e.target.checked)} />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={formLoader}>
        {formLoader ? "Loading..." : isEdit ? "Update" : "Create"}
      </Button>
    </Form>
  );
};

export default MenuItemForm;
