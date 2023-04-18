import React from "react";
import { Button, Modal } from "react-bootstrap";
import MenuItemForm from "./MenuItemForm";
import { updateMenuItem } from "../../../services/admin/menu-items";

const MenuItemEditModal = ({ menuItem, menuItems, setMenuItems }) => {
  const [formLoader, setFormLoader] = React.useState(false);
  const [formData, setFormData] = React.useState(menuItem);
  const handleFormData = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const [modal, setModal] = React.useState(false);
  const handleModalOpen = () => {
    setModal(true);
  };
  const handleModalClose = () => {
    setModal(false);
    setFormData(menuItem);
  };

  const handleFormSubmit = async () => {
    setFormLoader(true);
    try {
      const response = await updateMenuItem(formData._id, formData);
      const index = menuItems.findIndex(
        (item) => item._id === response.data._id
      );
      const newMenuItems = [...menuItems];
      newMenuItems[index] = response.data;
      setMenuItems(newMenuItems);
      handleModalClose();
    } catch (error) {
      console.log(error);
    }
    setFormLoader(false);
  };

  return (
    <div>
      <Button
        size="sm"
        variant="primary"
        onClick={handleModalOpen}
        className="mx-1"
      >
        Edit
      </Button>

      <Modal show={modal} onHide={handleModalClose} className="custom-modal">
        <Modal.Body>
          <div className="custom-modal-header">Edit Item</div>

          <div className="custom-modal-body">
            <MenuItemForm
              data={formData}
              handleData={handleFormData}
            />
          </div>

          <div className="custom-modal-footer">
            <Button
              size="sm"
              variant="light"
              onClick={handleModalClose}
              disabled={formLoader}
            >
              close
            </Button>
            <Button
              size="sm"
              variant="primary"
              onClick={handleFormSubmit}
              disabled={formLoader}
            >
              {formLoader ? "Processing..." : "Continue"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MenuItemEditModal;
