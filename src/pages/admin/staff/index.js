import React from "react";
// components
import StaffView from "../../../components/admin/staff/View";
import StaffCreate from "../../../components/admin/staff/CreateModal";
// api services
import { staffService } from "../../../services/admin/staff";
//styles
import "./styles.scss";

const Staff = () => {
  const [loader, setLoader] = React.useState(null);
  const [staff, setStaff] = React.useState(null);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      setLoader(true);
      const staffData = await staffService.getAll();

      if (staffData && staffData.users && staffData.users.length > 0)
        setStaff(staffData.users);

      setLoader(false);
    };

    fetchInitialData();
  }, []);

  return (
    <div className="admin-content">
      <div className="header-area"></div>
      {loader ? (
        <div className="text-center text-secondary">Loading...</div>
      ) : (
        <div className="content-area">
          <div className="header">
            <h4 className="m-0 p-0">Staff</h4>
            <StaffCreate setStaff={setStaff} />
          </div>
          <div className="content">
            <>
              {staff && staff.length > 0 ? (
                <div>
                  <StaffView staff={staff} setStaff={setStaff} />
                </div>
              ) : (
                <div className="text-center text-secondary">
                  No staff created
                </div>
              )}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;
