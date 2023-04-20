import React from "react";
// bootstrap
import { Button, Modal } from "react-bootstrap";
// components
import StaffForm from "./StaffForm";
// api services
import { staffService } from "../../../services/admin/staff";

const StaffEditView = ({ data, setStaff }) => {
  let defaultData = {
    name: "",
    email: "",
    password: "",
    role: "STAFF",
  };

  const [formLoader, setFormLoader] = React.useState(false);
  const [formData, setFormData] = React.useState(defaultData.name);
  const handleFormData = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const [modal, setModal] = React.useState(false);
  const handleModalOpen = () => {
    setModal(true);
    setFormData({
      id: data._id,
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      role: data.role,
    });
  };
  const handleModalClose = () => {
    setModal(false);
    setFormData(defaultData);
  };

  const handleFormSubmit = async () => {
    setFormLoader(true);
    await staffService
      .update(formData)
      .then((response) => {
        setStaff((prevData) => {
          return prevData.map((_staff) =>
            _staff._id === formData.id
              ? {
                  ..._staff,
                  fullName: formData.fullName,
                  role: formData.role,
                }
              : _staff
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
          <div className="custom-modal-header">Update Staff</div>

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

export default StaffEditView;
