const express = require("express");
const router = express.Router();

// controllers
const controllerAuth = require("../controllers/authController");

const controller = require("../controllers/controller");
const controllerMenuItems = require("../controllers/menuController");
const controllerOrders = require("../controllers/orderController");
const controllerTables = require("../controllers/tableController");
const controllerFeedback = require("../controllers/feedbackController");
// v2
const controllerStaff = require("../controllers/staffController");

module.exports = function (app) {
  // <------------------------AUTH------------------------------->
  //Sign-in
  router.post("/api/sign-in", controllerAuth.loginUser);
  //SignUp
  router.post("/api/signup", controller.createUser);

  // <------------------------ADMIN------------------------------->
  //Dashboard
  //router.post("/api/admin/dashboard",controller.createDashboard);

  //Menu
  router.get("/api/admin/menu", controllerMenuItems.getAllMenu);
  router.get("/api/admin/menu/:menu_id", controllerMenuItems.getMenuById);
  router.post("/api/admin/menu", controllerMenuItems.createMenu);
  router.put("/api/admin/menu/:menu_id", controllerMenuItems.editMenu);
  router.delete("/api/admin/menu/:menu_id", controllerMenuItems.deleteMenu);
  router.get(
    "/api/admin/menu/:menu_id/menu-item",
    controllerMenuItems.getAllMenuItemsByMenuId
  );

  //MenuItems
  router.get("/api/admin/menu-item", controllerMenuItems.getAllMenuItems);
  router.get(
    "/api/admin/menu-item/:menu_item_id",
    controllerMenuItems.getMenuItemById
  );
  router.post("/api/admin/menu-item", controllerMenuItems.createMenuItem);
  router.put(
    "/api/admin/menu-item/:menu_item_id",
    controllerMenuItems.editMenuItem
  );
  router.delete(
    "/api/admin/menu-item/:menu_item_id",
    controllerMenuItems.deleteMenuItem
  );

  //Table
  router.get("/api/admin/table", controllerTables.getAllTables);
  router.get("/api/admin/table/:table_id", controllerTables.getTableById);
  router.post("/api/admin/table", controllerTables.createTable);
  router.put("/api/admin/table/:table_id", controllerTables.editTable);
  router.delete("/api/admin/table/:table_id", controllerTables.deleteTable);

  //User
  router.get("/api/admin/user", controller.getAllUsers);
  router.get("/api/admin/user/:user_id", controller.getUserById);
  router.post("/api/admin/user", controller.createUser);
  router.put("/api/admin/user/:user_id", controller.editUser);
  router.delete("/api/admin/user/:user_id", controller.deleteUser);

  //Order
  router.get("/api/admin/orders", controllerOrders.getAllOrders);
  router.put("/api/admin/order/:order_id", controllerOrders.editOrder);

  // //OrderFeedback
  router.get("/api/admin/feedback", controllerFeedback.getAllFeedback);

  // <------------------------STAFF------------------------------->
  //Tables
  router.get("/api/staff/table", controllerTables.getAllTables);
  //Menu
  router.get("/api/staff/menu", controllerMenuItems.getAllMenu);
  router.get(
    "/api/staff/menu/:menu_id/menu-item",
    controllerMenuItems.getAllMenuItemsByMenuId
  );

  // Order
  router.get("/api/staff/orders", controllerOrders.getAllOrders);
  router.post("/api/staff/order", controllerOrders.createOrder);
  router.put("/api/staff/order/:order_id", controllerOrders.editOrder);

  //OrderItems
  router.post("/api/staff/order-item", controllerOrders.createOrderItem);
  router.put(
    "/api/staff/order-item/:order_item_id",
    controllerOrders.editOrderItem
  );
  router.delete(
    "/api/staff/order-item/:order_item_id",
    controllerOrders.deleteOrderItem
  );
  router.get(
    "/api/staff/order/:order_id/order-item",
    controllerOrders.getAllOrderItemsByOrderId
  );

  // //OrderFeedback
  router.post(
    "/api/staff/:order_id/feedback",
    controllerFeedback.createFeedbackUnderOrder
  );
  router.get(
    "/api/staff/:order_id/feedback",
    controllerFeedback.getFeedbackUnderOrder
  );

  router.get(
    "/api/admin/table/:table_id/orders",
    controllerOrders.getOrdersByTableId
  );
  router.get(
    "/api/admin/menu-with-items",
    controllerMenuItems.getAllMenuWithMenuItems
  );

  // staff updated routes starts
  router.post(
    "/api/staff/v2/book-a-table",
    controllerStaff.staffBookATableController
  );

  router.get(
    "/api/staff/v2/order-by-table-id/:table_id",
    controllerStaff.getAllOrderUnderTable
  );

  router.post(
    "/api/staff/v2/assign-staff-table-to-order",
    controllerStaff.staffAssignATableToOrder
  );

  router.put("/api/staff/v2/table-update/", controllerStaff.staffUpdateTable);

  router.delete(
    "/api/staff/v2/delete-order/:order_id",
    controllerStaff.staffDeleteOrder
  );

  // staff updated routes ends

  app.use("/", router);
};
