import React from "react";
// bootstrap
import { Button, Modal } from "react-bootstrap";
// components
import StaffForm from "./StaffForm";
// api services
import { staffService } from "../../../services/admin/staff";

const StaffCreateView = ({ staff, setStaff }) => {
  let defaultData = {
    name: "",
    //email: "",
    //password: "",
    //role: "STAFF",
    //status: "EMPTY",
    //defaultStaffId: null,
  };

  const [formLoader, setFormLoader] = React.useState(false);
  const [formData, setFormData] = React.useState(defaultData.name);
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
    await staffService
      .create({name: formData.name})
      .then((response) => {
        setStaff((prevData) => [...prevData, response.data]);
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
        Create Staff
      </Button>

      <Modal show={modal} onHide={handleModalClose} className="custom-modal">
        <Modal.Body>
          {/* header */}
          <div className="custom-modal-header">Create Staff</div>

          {/* content */}
          <div className="custom-modal-body">
            <StaffForm
              data={formData}
              handleData={handleFormData}
              //staff={staff}
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

export default StaffCreateView;