import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

const MenuItemViewModal = ({ menuItem, menuItems, setMenuItems }) => {
  const [modal, setModal] = React.useState(false);
  const handleModalOpen = () => {
    setModal(true);
  };
  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <div>
      <Button
        size="sm"
        variant="info"
        onClick={handleModalOpen}
        className="mx-1"
      >
        View
      </Button>

      <Modal show={modal} onHide={handleModalClose} className="custom-modal">
        <Modal.Body>
          <div className="custom-modal-header">{menuItem.name}</div>

          <div className="custom-modal-body">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <Image
                  src={menuItem.image}
                  alt={menuItem.name}
                  width="150"
                  height="150"
                  className="rounded"
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <p className="fw-bold">{menuItem.name}</p>
                <p className="text-muted">{menuItem.description}</p>
                <p className="fw-bold">${menuItem.price}</p>
              </div>
            </div>
          </div>

          <div className="custom-modal-footer">
            <Button
              size="sm"
              variant="light"
              onClick={handleModalClose}
            >
              <FontAwesomeIcon icon={faWindowClose} /> Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MenuItemViewModal;
