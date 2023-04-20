import React from "react";
// react bootstrap
import { Button, Modal } from "react-bootstrap";
// components
import OrderForm from "./OrderForm";
// services
import { staffService } from "../../../services/staff/index";

const CreateOrder = ({ handleOrderAssignment, table_id }) => {
  const dateFormat = (date) => {
    date = new Date(date);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  let defaultData = {
    user_name: "",
    reserved_at: new Date(),
    reserved_time: new Date(),
    people_count: 0,
    order_status: "BOOKED",
    order_type: "DINEIN",
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
    let payload = {
      ...formData,
      reserved_at: dateFormat(formData.reserved_at),
    };

    console.log("payload", payload);

    await staffService
      .createOrder(payload)
      .then((response) => {
        if (response?.data?.order) handleOrderAssignment(response?.data?.order);
        handleModalClose();
      })
      .catch((error) => {
        console.log(error);
      });
    setFormLoader(false);
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
        Create Order
      </Button>

      <Modal show={modal} onHide={handleModalClose} className="custom-modal">
        <Modal.Body>
          {/* header */}
          <div className="custom-modal-header">Create order</div>

          {/* content */}
          <div className="custom-modal-body">
            <OrderForm data={formData} handleData={handleFormData} />
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

export default CreateOrder;
