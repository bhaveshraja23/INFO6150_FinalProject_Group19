import React from "react";
// bootstrap
import { Button, Modal } from "react-bootstrap";
// api services
import { menuItemService } from "../../../services/admin/menuItem";

const MenuDeleteView = ({ data, setMenuItems }) => {
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
    await menuItemService
      .delete(data?._id)
      .then((response) => {
        setMenuItems((prevData) => {
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
          <div className="custom-modal-header">Delete Menu Item</div>

          {/* content */}
          <div className="custom-modal-body">
            Are you sure you want to delete this Menu Item?
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
