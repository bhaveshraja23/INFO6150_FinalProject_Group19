import React from "react";
// react router
import { Link } from "react-router-dom";

const TableView = ({ table_id, tables }) => {
  return (
    <div>
      {tables.map((_table, _idx) => (
        <Link to={`/staff?table_id=${_table._id}`} key={_table._id}>
          <div
            className={`staff-table-card`}
            style={
              _table._id === table_id ? { backgroundColor: "#f5f5f5" } : {}
            }
          >
            <div className="card-title">{_table.name}</div>
            <div
              className={`card-status ${
                _table.status === "EMPTY" ? "empty" : "occupied"
              }`}
            >
              {_table.status}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TableView;
