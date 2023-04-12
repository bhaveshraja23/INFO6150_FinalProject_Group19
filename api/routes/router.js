const express = require('express');
const router = express.Router();

const controller = require("../controllers/controller");

module.exports = function (app) {


    //Sign-in
    router.post("/api/sign-in", controller.loginUser);
    //SignUp
    router.post("/api/signup",controller.createUser);


    //Admin
    //Dashboard
    //router.post("/api/admin/dashboard",controller.createDashboard);
    //Menu
    router.get("/api/admin/menu", controller.getAllMenu);
    router.get("/api/admin/menu/:menu_id", controller.getMenuById);
    router.post("/api/admin/menu", controller.createMenu);
    router.put("/api/admin/menu/:menu_id", controller.editMenu);
    router.delete("/api/admin/menu/:menu_id", controller.deleteMenu);
    router.get("/api/admin/menu/:menu_id/menu-item", controller.getAllMenuItemsByMenuId);
    //MenuItems
   /*  router.get("/api/admin/menu-item", controller.getAllMenuItems);
    router.get("/api/admin/menu-item/:menu_item_id", controller.getMenuItemById);
    router.post("/api/admin/menu-item", controller.createMenuItem);
    router.put("/api/admin/menu-item/:menu_item_id",controller.editMenuItem);
    router.delete("/api/admin/menu-item/:menu_item_id", controller.deleteMenuItem); */
    //Table
    /* router.get("/api/admin/table", controller.getAllTables);
    router.get("/api/admin/table/:table_id",controller.getTableById);
    router.post("/api/admin/table", controller.createTable);
    router.put("/api/admin/:table_id", controller.editTable);
    router.delete("/api/admin/:table_id", controller.deleteTable); */
    //User
    router.get("/api/admin/user", controller.getAllUsers);
    router.get("/api/admin/user/:user_id", controller.getUserById);
    router.post("/api/admin/user", controller.createUser);
    router.put("/api/admin/user/:user_id", controller.editUser);
    router.delete("/api/admin/user/:user_id", controller.deleteUser);
    //Order
    /* router.get("/api/admin/orders", controller.getAllOrders);
    router.put("/api/admin/order/:order_id", controller.editOrder);
    //OrderFeedback
    router.get("/api/admin/feedback", controller.getAllFeedback); */


    //Staff
    //Tables
    /* router.get("/api/staff/table", controller.getAllTables);
    //Menu
    router.get("/api/staff/menu", controller.getAllMenu);
    router.get("/api/staff/menu/:menu_id/menu-item", controller.getAllMenuItemsByMenuId);


    //Order
    router.get("/api/staff/orders", controller.getAllOrders);
    router.post("/api/staff/order", controller.createOrder);
    router.put("/api/staff/order/:order_id", controller.editOrder);
    //OrderItems
    router.post("/api/staff/order-item", controller.createOrderItem);
    router.put("/api/staff/order-item/:order_id", controller.editOrderItem);
    router.delete("/api/staff/order-item/:order_item_id", controller.deleteOrderItem);
    router.get("/api/staff/order/:order_id/order-item", controller.getAllOrderItemsByOrderId);
    //OrderFeedback
    router.post("/api/staff/:order_id/feedback", controller.createFeedbackUnderOrder);
    router.get("/api/staff/:order_id/feedback", controller.getFeedbackUnderOrder); */
   
    app.use('/', router);
};