import React from "react";
// react router
import { useSearchParams } from "react-router-dom";
// components
import TableView from "../../../components/staff/tables/View";
import OrderView from "../../../components/staff/orders/View";
import CreateOrderItemModal from "../../../components/staff/order-item/CreateOrderItem";
import OrderItemView from "../../../components/staff/order-item/View";
// api services
import { staffService } from "../../../services/staff";
//styles
import "./styles.scss";
import images from "../../../constants/images";
import { useNavigate } from "react-router-dom";
import { removeSessionStorage } from "../../../session/session-storage";

const StaffMenuPage = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    
    removeSessionStorage();

    navigate("/log-in");
  };

  let [searchParams] = useSearchParams();
  const table_id = searchParams.get("table_id");
  const order_id = searchParams.get("order_id");

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
      const menuWithItemsData = await staffService.menuWithMenuItems();

      if (
        tableData &&
        tableData.restauranttables &&
        tableData.restauranttables.length > 0
      )
        setTables(tableData.restauranttables);

      if (menuWithItemsData && menuWithItemsData.length > 0) {
        let menuItems = [];
        menuWithItemsData.map((_menu) => {
          if (_menu.items && _menu.items.length > 0) {
            _menu.items.map((_item) => {
              menuItems.push({
                ..._item.menuItem,
              });
            });
          }
        });
        setMenuWithItems(menuItems);
      }

      setLoader(false);
    };

    fetchInitialData();
  }, []);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      setOrderLoader(true);
      setTableOrders((prevData) => null);
      const tableOrders = await staffService.getOrdersUnderTable(table_id);

      if (
        tableOrders &&
        tableOrders.data &&
        tableOrders.data.orders &&
        tableOrders.data.orders.length > 0
      )
        setTableOrders(tableOrders.data.orders);

      setOrderLoader(false);
    };

    if (table_id) fetchInitialData();
  }, [table_id]);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      setOrderItemsLoader(true);
      setOrderItems((prevData) => null);
      const orderItems = await staffService.getOrderItemsWithOrderId(order_id);

      if (
        orderItems &&
        orderItems.orderitems &&
        orderItems.orderitems.length > 0
      )
        setOrderItems(orderItems.orderitems);

      setOrderItemsLoader(false);
    };

    if (order_id) fetchInitialData();
  }, [order_id]);

  return (
    <div className="staff-layout">
      <div className="staff-header">
        <div className="head-logo">
          <img src={images.dineordel} alt="food img" />
        </div>
        <div className="head-menu" onClick={handleLogout}>Logout</div>
      </div>
      {loader ? (
        <div className="text-center text-secondary">Loading...</div>
      ) : (
        <div className="staff-content">
          <div className="table-root-container">
            <div className="block-header">
              <h5 className="m-0 p-0">Tables</h5>
            </div>
            <div className="block-content">
              {tables && tables.length > 0 ? (
                <TableView table_id={table_id} tables={tables} />
              ) : (
                <div className="text-center text-secondary">
                  No Tables are available.
                </div>
              )}
            </div>
          </div>
          <div className="orders-root-container">
            <div className="block-header">
              <h5 className="m-0 p-0">Table Orders</h5>
            </div>
            <div className="block-content">
              {orderLoader ? (
                <div className="text-center text-secondary">Loading...</div>
              ) : (
                <>
                  <OrderView
                    table_id={table_id}
                    order_id={order_id}
                    orders={tableOrders}
                    setTables={setTables}
                    setTableOrders={setTableOrders}
                  />
                </>
              )}
            </div>
          </div>
          <div className="order-items-root-container">
            <>
              <div className="block-header order-item">
                <h5 className="m-0 p-0">Table Order Items</h5>
                <div>
                  {order_id && (
                    <CreateOrderItemModal
                      order_id={order_id}
                      menuItems={menuWithItems}
                      setOrderItemsLoader={setOrderItemsLoader}
                      setOrderItems={setOrderItems}
                    />
                  )}
                </div>
              </div>
              {!order_id ? (
                <div className="text-center text-secondary p-5">
                  No Order Selected
                </div>
              ) : (
                <div className="block-content">
                  <OrderItemView
                    orderItems={orderItems}
                    setOrderItemsLoader={setOrderItemsLoader}
                    setOrderItems={setOrderItems}
                  />
                </div>
              )}
              {orderItemsLoader && (
                <div className="item-loader">Updating...</div>
              )}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffMenuPage;
