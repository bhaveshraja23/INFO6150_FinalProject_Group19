import React from "react";
// bootstrap
import { Button, Modal } from "react-bootstrap";
// components
import MenuForm from "./MenuForm";
import { menuService } from "../../../services/admin/menu";

const MenuCreateView = ({ setMenu }) => {
  let defaultData = {
    name: "",
    description: "",
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
    await menuService
      .create(formData)
      .then((response) => {
        setMenu((prevData) => [...prevData, response.data]);
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
        Add Menu
      </Button>

      <Modal show={modal} onHide={handleModalClose} className="custom-modal">
        <Modal.Body>
          {/* header */}
          <div className="custom-modal-header">Add Menu</div>

          {/* content */}
          <div className="custom-modal-body">
            <MenuForm data={formData} handleData={handleFormData} />
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
