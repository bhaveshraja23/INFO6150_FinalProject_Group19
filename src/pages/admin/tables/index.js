import React from "react";
// components
import TableView from "../../../components/admin/table/View";
import TableCreate from "../../../components/admin/table/CreateModal";
// api services
import { tableService } from "../../../services/admin/tables";
import { staffService } from "../../../services/admin/staff";
//styles
import "./styles.scss";

const Tables = () => {
  const [loader, setLoader] = React.useState(null);
  const [tables, setTables] = React.useState(null);
  const [staff, setStaff] = React.useState(null);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      setLoader(true);
      const tableData = await tableService.getAll();
      const staffData = await staffService.getAll();

      if (
        tableData &&
        tableData.restauranttables &&
        tableData.restauranttables.length > 0
      )
        setTables(tableData.restauranttables);
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
            <h4 className="m-0 p-0">Tables</h4>
            <TableCreate staff={staff} setTables={setTables} />
          </div>
          <div className="content">
            <>
              {tables && tables.length > 0 ? (
                <div>
                  <TableView
                    tables={tables}
                    staff={staff}
                    setTables={setTables}
                  />
                </div>
              ) : (
                <div className="text-center text-secondary">
                  No tables are created
                </div>
              )}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tables;
