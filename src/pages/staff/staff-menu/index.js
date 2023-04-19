import React from "react";
// react router
import { useSearchParams } from "react-router-dom";
// components
import TableView from "../../../components/staff/tables/View";
import OrderView from "../../../components/staff/orders/View";
// api services
import { staffService } from "../../../services/staff";
//styles
import "./styles.scss";

const StaffMenuPage = () => {
  let [searchParams] = useSearchParams();
  const table_id = searchParams.get("table_id");
  const order_id = searchParams.get("order_id");

  console.log("table_id", table_id);
  console.log("order_id", order_id);

  const [loader, setLoader] = React.useState(null);
  const [tables, setTables] = React.useState(null);

  const [orderLoader, setOrderLoader] = React.useState(null);
  const [tableOrders, setTableOrders] = React.useState(null);

  const [orderItemsLoader, setOrderItemsLoader] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState(null);

  const [menuWithItems, setMenuWithItems] = React.useState(null);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      setLoader(true);
      const tableData = await staffService.getAllTables();
      if (
        tableData &&
        tableData.restauranttables &&
        tableData.restauranttables.length > 0
      )
        setTables(tableData.restauranttables);
      setLoader(false);
    };

    fetchInitialData();
  }, []);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      setOrderLoader(true);
      const tableOrders = await staffService.getOrdersUnderTable(table_id);
      console.log("tableOrders", tableOrders);
      if (tableOrders && tableOrders.length > 0) setTableOrders(tableOrders);
      setOrderLoader(false);
    };

    if (table_id) fetchInitialData();
  }, [table_id]);

  return (
    <div className="staff-layout">
      <div className="staff-header">
        <div className="head-logo">Logo</div>
        <div className="head-menu">Logout</div>
      </div>
      {loader ? (
        <div className="text-center text-secondary">Loading...</div>
      ) : (
        <div className="staff-content">
          <div className="table-root-container">
            <div className="block-header">Select table</div>
            <div className="block-content">
              {tables && tables.length > 0 ? (
                <TableView tables={tables} />
              ) : (
                <div className="text-center text-secondary">
                  No Tables are available.
                </div>
              )}
            </div>
          </div>
          <div className="orders-root-container">
            <div className="block-header">Select Orders</div>
            <div className="block-content">
              {orderLoader ? (
                <div className="text-center text-secondary">Loading...</div>
              ) : (
                <>
                  {tableOrders && tableOrders.length > 0 ? (
                    <OrderView orders={tableOrders} />
                  ) : (
                    <div className="text-center text-secondary">
                      No Table Orders are available.
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="order-items-root-container">
            <div className="block-header">Order Items</div>
            <div className="block-content">content</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffMenuPage;
