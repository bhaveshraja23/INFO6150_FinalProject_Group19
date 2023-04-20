import React from "react";
// styles
import "./styles.scss";
import { Button } from "react-bootstrap";
// services
import { staffService } from "../../../services/staff/index";

const OrderItemView = ({ orderItems, setOrderItemsLoader, setOrderItems }) => {
  let cgst = 0;
  let sgst = 0;

  const calculateAmount = () => {
    let amount = 0;
    if (orderItems && orderItems.length > 0)
      amount = orderItems.reduce(
        (partialSum, a) => partialSum + parseFloat(a.price),
        0
      );
    return amount.toFixed(2);
  };

  const handleUpdateDeleteItem = async (orderItem, type) => {
    setOrderItemsLoader(true);
    let price = parseFloat(orderItem.price);
    let quantity = parseInt(orderItem.quantity);

    if (type === "increment") {
      price = price + parseFloat(orderItem.itemId.price);
      quantity = quantity + 1;
    }
    if (type === "decrement") {
      price = price - parseFloat(orderItem.itemId.price);
      quantity = quantity - 1;
    }

    if (quantity <= 0) {
      deleteOrderItem(orderItem._id);
    } else {
      let itemPayload = {
        id: orderItem._id,
        quantity: quantity,
        price: price,
      };
      updateOrderItem(itemPayload);
    }
  };

  const updateOrderItem = async (itemPayload) => {
    setOrderItemsLoader(true);
    await staffService
      .updateOrderItem(itemPayload)
      .then((response) => {
        console.log(response);
        setOrderItems((prevData) => {
          return prevData.map((_menu) =>
            _menu._id === itemPayload.id
              ? {
                  ..._menu,
                  price: itemPayload.price,
                  quantity: itemPayload.quantity,
                }
              : _menu
          );
        });
      })
      .catch((error) => {
        console.log(error);
      });
    setOrderItemsLoader(false);
  };

  const deleteOrderItem = async (_oIId) => {
    setOrderItemsLoader(true);
    await staffService
      .deleteOrderItem(_oIId)
      .then((response) => {
        console.log(response);
        setOrderItems((prevData) => {
          return prevData.filter((_menu) => _menu._id !== _oIId);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    setOrderItemsLoader(false);
  };

  return (
    <>
      <div className="top-content">
        <div className="oi-header">Ordered Items</div>
        <div className="oi-content">
          {orderItems &&
            orderItems.length > 0 &&
            orderItems.map((_item, _idx) => (
              <div key={_idx} className="item-container">
                <div className="left">
                  <div>{_item?.itemId?.name}</div>
                  <div className="p-2">
                    <small></small>
                  </div>
                </div>
                <div className="middle">
                  <div
                    className="remove"
                    onClick={() => handleUpdateDeleteItem(_item, "decrement")}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "14px" }}
                    >
                      remove
                    </span>
                  </div>
                  <div className="count">{_item?.quantity}</div>
                  <div
                    className="add"
                    onClick={() => handleUpdateDeleteItem(_item, "increment")}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "14px" }}
                    >
                      add
                    </span>
                  </div>
                </div>
                <div className="right">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "18px" }}
                  >
                    attach_money
                  </span>
                  {_item?.price ? parseFloat(_item?.price).toFixed(2) : 0}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="middle-content">
        <div className="oi-header">Bill Details</div>
        <div className="oi-content">
          <div className="item">
            <div className="left">Total Amount</div>
            <div className="right">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "18px" }}
              >
                attach_money
              </span>
              {calculateAmount()}
            </div>
          </div>
          <div className="item">
            <div className="left">CGST</div>
            <div className="right">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "18px" }}
              >
                attach_money
              </span>
              {cgst}
            </div>
          </div>
          <div className="item">
            <div className="left">SGST</div>
            <div className="right">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "18px" }}
              >
                attach_money
              </span>
              {sgst}
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-content">
        <div className="oi-header">TO PAY</div>
        <div className="oi-content">
          <div className="item">
            <div className="left">Amount</div>
            <div className="right">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "18px" }}
              >
                attach_money
              </span>
              {calculateAmount()}
            </div>
          </div>
          {/* <div className="pay-button">
            <Button variant="outline-primary" className="w-100" >
              PAY BILL
            </Button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OrderItemView;
