import React from "react";
// bootstrap
import { Button, Modal } from "react-bootstrap";
// components
import MenuForm from "./MenuForm";
// api services
import { menuService } from "../../../services/admin/menu";

const MenuDeleteView = ({ data, setMenu }) => {
  const [formLoader, setFormLoader] = React.useState(false);

  const [modal, setModal] = React.useState(false);
  const handleModalOpen = () => {
    setModal(true);
  };
  const handleModalClose = () => {
    setModal(false);
  };

  const handleFormSubmit = async () => {
    setFormLoader(true);
    await menuService
      .delete(data?._id)
      .then((response) => {
        setMenu((prevData) => {
          return prevData.filter((_menu) => _menu._id !== data?._id);
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
      <Button size="sm" variant="danger" onClick={handleModalOpen}>
        Delete
      </Button>

      <Modal show={modal} onHide={handleModalClose} className="custom-modal">
        <Modal.Body>
          {/* header */}
          <div className="custom-modal-header">Delete Table</div>

          {/* content */}
          <div className="custom-modal-body">
            Are you sure you want to delete this table?
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
              variant="danger"
              onClick={handleFormSubmit}
              disabled={formLoader}
            >
              {formLoader ? "Processing..." : "Delete"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MenuDeleteView;