import React from "react";
// bootstrap
import { Button, Modal } from "react-bootstrap";
// components
import MenuItemForm from "./MenuItemForm";
// services
import { menuItemService } from "../../../services/admin/menuItem";

const MenuCreateView = ({ menuId, setMenuItems }) => {
  let defaultData = {
    name: "",
    description: "",
    price: 0,
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
    let payload = { ...formData, menu_id: menuId };

    await menuItemService
      .create(payload)
      .then((response) => {
        setMenuItems((prevData) => [...prevData, response.data]);
        handleModalClose();
      })
      .catch((error) => {
        console.log(error);
      });
    setFormLoader(false);
  };

  return (
    <div>
      <Button size="md" variant="primary" onClick={handleModalOpen}>
        Add Menu Item
      </Button>

      <Modal show={modal} onHide={handleModalClose} className="custom-modal">
        <Modal.Body>
          {/* header */}
          <div className="custom-modal-header">Add Menu</div>

          {/* content */}
          <div className="custom-modal-body">
            <MenuItemForm data={formData} handleData={handleFormData} />
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

export default MenuCreateView;
