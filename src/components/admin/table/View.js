import React from "react";
// components
import TableEdit from "./EditModal";
import TableDelete from "./DeleteModal";

const TableView = ({ tables, staff, setTables }) => {
  return (
    <div className="table-render-view">
      {tables &&
        tables.map((_table, _idx) => (
          <div key={_idx} className="table-card">
            <div className="card-title">{_table.name}</div>
            <div
              className={`card-status ${
                _table.status === "EMPTY" ? "empty" : "occupied"
              }`}
            >
              {_table.status}
            </div>
            <div className="card-button-container">
              <TableEdit data={_table} staff={staff} setTables={setTables} />
              <TableDelete data={_table} setTables={setTables} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default TableView;
