import React from "react";
// components
import StaffEdit from "./EditModal";
import StaffDelete from "./DeleteModal";

const StaffView = ({ staff, setStaff }) => {
  return (
    <div className="table-render-view">
      {staff &&
        staff.map((_staff, _idx) => (
          <div key={_idx} className="table-card">
            <div className="card-title">{_staff.fullName}</div>
            <div className="card-status empty">{_staff.role.toUpperCase()}</div>
            <div className="card-button-container">
              <StaffEdit data={_staff} setStaff={setStaff} />
              <StaffDelete data={_staff} setStaff={setStaff} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default StaffView;
