import React from "react";
// react bootstrap
import { Button } from "react-bootstrap";
// react router
import { Link } from "react-router-dom";
// components
import OrderCreate from "./CreateOrder";
// session storage
import { getSessionStorage } from "../../../session/session-storage";
// api services
import { staffService } from "../../../services/staff";

const OrderView = ({
  table_id,
  order_id,
  orders,
  setTables,
  setTableOrders,
}) => {
  // make assign request
  const assignOrderToTableStaff = async (currentOrder) => {
    let user = getSessionStorage();
    user = user ? user : null;

    if (user) {
      const payload = {
        table_id: table_id,
        order_id: currentOrder?._id,
        staff_id: user._id,
      };

      await staffService
        .assignOrder(payload)
        .then((response) => {
          console.log(response);
          setTableOrders((prevData) =>
            prevData && prevData.length > 0
              ? prevData.map((_order) =>
                  _order._id === response.data.order._id
                    ? response.data.order
                    : _order
                )
              : [response.data.order]
          );
        })
        .catch((error) => {
          console.log(error);
        });
      // table status update
      await staffService
        .updateTable({ id: table_id, status: "OCCUPIED" })
        .then((response) => {
          console.log(response);
          setTables((prevData) =>
            prevData.map((_table) =>
              _table._id === response.data.table._id
                ? { ..._table, status: "OCCUPIED" }
                : _table
            )
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // make cancel request
  const cancelOrder = (currentOrder) => {};

  return (
    <div>
      <div className="pb-2">
        <OrderCreate
          handleOrderAssignment={assignOrderToTableStaff}
          table_id={table_id}
        />
      </div>

      {orders && orders.length > 0 ? (
        <>
          {orders.map((_order, _idx) => (
            <Link
              to={`/staff?table_id=${table_id}&order_id=${_order._id}`}
              key={_order._id}
            >
              <div
                className={`staff-table-card`}
                style={
                  _order._id === order_id ? { backgroundColor: "#f5f5f5" } : {}
                }
              >
                <div>
                  <small>{_order.customerId._id}</small>
                </div>
                <div className="card-title">{_order.customerId.fullName}</div>
                <div>
                  <small>
                    {`Reserved: ${_order.reserved_at} ${_order.reserved_time}`}
                  </small>
                </div>

                {_order.tableId && (
                  <>
                    <div>
                      <small>
                        {`Table: ${_order.tableId?.name || "Not Assigned"}`}
                      </small>
                    </div>
                    <div>
                      <small>
                        {`Staff: ${_order.staffId?.fullName || "Not Assigned"}`}
                      </small>
                    </div>
                  </>
                )}

                <div className={`card-status empty`}>{_order.status}</div>
                {!_order.tableId && (
                  <div
                    className="d-flex items-center gap-3"
                    style={{ paddingTop: "14px" }}
                  >
                    <Button
                      size="sm"
                      type="button"
                      variant="outline-danger"
                      className="w-100"
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      type="button"
                      variant="outline-primary"
                      className="w-100"
                      onClick={() => assignOrderToTableStaff(_order)}
                    >
                      Assign
                    </Button>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </>
      ) : (
        <div className="text-center text-secondary">
          No Table Orders are available.
        </div>
      )}
    </div>
  );
};

export default OrderView;
