import React from "react";
// bootstrap
import { Button, Modal } from "react-bootstrap";
// components
import MenuForm from "./MenuForm";
// api services
import { menuService } from "../../../services/admin/menu";

const MenuEditView = ({ data, setMenu }) => {
  let defaultData = {
    id: "",
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
    setFormData({
      id: data._id,
      name: data.name,
      description: data.description,
    });
  };

  const handleModalClose = () => {
    setModal(false);
    setFormData(defaultData);
  };

  const handleFormSubmit = async () => {
    setFormLoader(true);
    await menuService
      .update(formData)
      .then((response) => {
        setMenu((prevData) => {
          return prevData.map((_menu) =>
            _menu._id === formData.id
              ? {
                  ..._menu,
                  name: formData.name,
                  description: formData.description,
                }
              : _menu
          );
        });
        handleModalClose();
      })
      .catch((error) => {
        console.log(error);
      });
    setFormLoader(false);
  };

  return (
    <div>
      <Button size="sm" variant="primary" onClick={handleModalOpen}>
        Edit
      </Button>

      <Modal show={modal} onHide={handleModalClose} className="custom-modal">
        <Modal.Body>
          {/* header */}
          <div className="custom-modal-header">Update Menu</div>

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
              close
            </Button>
            <Button
              size="sm"
              variant="primary"
              onClick={handleFormSubmit}
              disabled={formLoader}
            >
              {formLoader ? "Processing..." : "Edit"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MenuEditView;
