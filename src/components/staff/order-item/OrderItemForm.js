import React from "react";
// bootstrap
import { Form } from "react-bootstrap";

const OrderItemForm = ({ data, handleData, setFormData, menuItems }) => {
  const handleQuantity = (_q) => {
    let _quantity = parseInt(_q);
    if (_quantity >= 1) {
      let currentMenuItem = menuItems.filter(
        (_item) => _item._id === data.item_id
      );
      if (currentMenuItem && currentMenuItem.length > 0) {
        currentMenuItem = currentMenuItem[0];
        setFormData((prevData) => ({
          ...prevData,
          price: (parseFloat(currentMenuItem.price) * _quantity).toFixed(2),
          quantity: _quantity,
        }));
      }
    }
  };

  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.orderitem.item_id">
        <Form.Label>Select Menu</Form.Label>
        <Form.Select
          placeholder="Staff"
          value={data.item_id}
          onChange={(e) => handleData("item_id", e.target.value)}
        >
          <option value="null">Select Menu item</option>
          {menuItems &&
            menuItems.length > 0 &&
            menuItems.map((_Item, _idx) => (
              <option key={`staff-option-${_idx}`} value={_Item._id}>
                {_Item.name} - {_Item.menuId.name}
              </option>
            ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.orderitem.quantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          placeholder="Select quantity"
          autoFocus
          value={data.quantity}
          onChange={(e) => handleQuantity(e.target.value)}
        />
      </Form.Group>
    </div>
  );
};

export default OrderItemForm;
