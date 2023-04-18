import React from "react";
// bootstrap
import { Button, Modal } from "react-bootstrap";
// components
import TableForm from "./TableForm";
// api services
import { tableService } from "../../../services/admin/tables";

const TableDeleteView = ({ data, setTables }) => {
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
    await tableService
      .delete(data?._id)
      .then((response) => {
        setTables((prevData) => {
          return prevData.filter((_table) => _table._id !== data?._id);
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
              {formLoader ? "Processing..." : "Continue"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TableDeleteView;