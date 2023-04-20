import React from "react";
// bootstrap
import { Form } from "react-bootstrap";


const MenuItemFormView = ({ data, handleData }) => {
    return (
        <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>name</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="French Fries"
                    autoFocus
                    value={data.name}
                    onChange={(e) => handleData("name",e.target.value)}
                    />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>description</Form.Label>
                <Form.Control
                type="text"
                placeholder="Full French"
                autoFocus
                value={data.description}
                onChange={(e) => handleData("description", e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>price</Form.Label>
                <Form.Control
                type="number"
                placeholder="$$$"
                autoFocus
                value={data.price}
                onChange={(e) => handleData("price", e.target.value)}
                />
            </Form.Group>
        </div>
    );
};

export default  MenuItemFormView;