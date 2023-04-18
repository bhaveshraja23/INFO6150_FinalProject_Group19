import React from "react";
// bootstrap
import { Button, Modal } from "react-bootstrap";
// components
import TableForm from "./TableForm";
// api services
import { tableService } from "../../../services/admin/tables";

const TableEditView = ({ data, staff, setTables }) => {
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
    setFormData({
      id: data._id,
      name: data.name,
      status: data.status,
      defaultStaffId: data.defaultStaffId,
    });
  };
  const handleModalClose = () => {
    setModal(false);
    setFormData(defaultData);
  };

  const handleFormSubmit = async () => {
    setFormLoader(true);
    await tableService
      .update(formData)
      .then((response) => {
        setTables((prevData) => {
          return prevData.map((_table) =>
            _table._id === response.data._id ? response.data : _table
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
          <div className="custom-modal-header">Update Table</div>

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

export default TableEditView;