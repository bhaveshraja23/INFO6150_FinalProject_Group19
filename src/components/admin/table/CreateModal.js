import React from "react";
// bootstrap
import { Button, Modal } from "react-bootstrap";
// components
import TableForm from "./TableForm";
// api services
import { tableService } from "../../../services/admin/tables";

const TableCreateView = ({ staff, setTables }) => {
  let defaultData = {
    name: "",
    status: "EMPTY",
    defaultStaffId: null,
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
    await tableService
      .create(formData)
      .then((response) => {
        setTables((prevData) => [...prevData, response.data]);
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
        Create Table
      </Button>

      <Modal show={modal} onHide={handleModalClose} className="custom-modal">
        <Modal.Body>
          {/* header */}
          <div className="custom-modal-header">Create Table</div>

          {/* content */}
          <div className="custom-modal-body">
            <TableForm
              data={formData}
              handleData={handleFormData}
              staff={staff}
            />
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
              {formLoader ? "Processing..." : "Continue"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TableCreateView;