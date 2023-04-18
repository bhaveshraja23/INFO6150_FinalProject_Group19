import React from "react";
import { Button, Modal } from "react-bootstrap";
import { deleteMenuItem } from "../../../services/admin/menu-items";

const MenuItemDeleteModal = ({ menuItem, menuItems, setMenuItems }) => {
  const [modal, setModal] = React.useState(false);
  const handleModalOpen = () => {
    setModal(true);
  };
  const handleModalClose = () => {
    setModal(false);
  };

  const handleDelete = async () => {
    try {
      await deleteMenuItem(menuItem._id);
      const newMenuItems = menuItems.filter(
        (item) => item._id !== menuItem._id
      );
      setMenuItems(newMenuItems);
      handleModalClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button
        size="sm"
        variant="danger"
        onClick={handleModalOpen}
        className="mx-1"
      >
        Delete
      </Button>

      <Modal show={modal} onHide={handleModalClose}>
        <Modal.Body>
          <div className="custom-modal-body">
            Are you sure you want to delete {menuItem.name}?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="sm"
            variant="light"
            onClick={handleModalClose}
          >
            Cancel
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MenuItemDeleteModal;
