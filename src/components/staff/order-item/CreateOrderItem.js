import React from "react";
// react bootstrap
import { Button, Modal } from "react-bootstrap";
// components
import OrderItemForm from "./OrderItemForm";
// services
import { staffService } from "../../../services/staff/index";

const CreateOrderItem = ({
  setOrderItemsLoader,
  order_id,
  menuItems,
  setOrderItems,
}) => {
  const dateFormat = (date) => {
    date = new Date(date);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  let defaultData = {
    price: "",
    quantity: "",
    order_id: order_id,
    item_id: "",
  };

  const [formLoader, setFormLoader] = React.useState(false);
  const [formData, setFormData] = React.useState(defaultData);
  const handleFormData = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const [modal, setModal] = React.useState(false);
  const handleModalOpen = () => {
    setModal(true);
    setFormData(defaultData);
  };
  const handleModalClose = () => {
    setModal(false);
    setFormData(defaultData);
  };

  const handleFormSubmit = async () => {
    setFormLoader(true);
    setOrderItemsLoader(true);
    let payload = {
      ...formData,
      orderId: formData.order_id,
      itemId: formData.item_id,
    };

    console.log("payload", payload);

    await staffService
      .createOrderItem(payload)
      .then((response) => {
        console.log(response);
        if (response?.data)
          setOrderItems((prevData) =>
            prevData && prevData.length > 0
              ? [...prevData, response?.data]
              : [response?.data]
          );
        handleModalClose();
      })
      .catch((error) => {
        console.log(error);
      });
    setFormLoader(false);
    setOrderItemsLoader(false);
  };

  return (
    <div>
      <Button
        size="sm"
        type="button"
        variant="outline-primary"
        className="w-100"
        onClick={handleModalOpen}
      >
        Add Item
      </Button>

      <Modal show={modal} onHide={handleModalClose} className="custom-modal">
        <Modal.Body>
          {/* header */}
          <div className="custom-modal-header">Add item</div>

          {/* content */}
          <div className="custom-modal-body">
            <OrderItemForm
              data={formData}
              handleData={handleFormData}
              setFormData={setFormData}
              menuItems={menuItems}
            />
          </div>

          {/* footer */}
          <div className="custom-modal-footer">
            <Button
              size="sm"
              variant="light"
              onClick={handleModalClose}
              disabled={formLoader}
            >
              cancel
            </Button>
            <Button
              size="sm"
              variant="primary"
              onClick={handleFormSubmit}
              disabled={formLoader}
            >
              {formLoader ? "Processing..." : "Add"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CreateOrderItem;
