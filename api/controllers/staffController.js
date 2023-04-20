var User = require("../models/userModel");
var Order = require("../models/orderModel");
var Table = require("../models/restaurantTableModel");
var OrderItem = require("../models/orderItemsModel");

// listing all orders under a table
exports.getAllOrderUnderTable = async function (req, res) {
  var { table_id } = req.params;

  const table = await Table.findById(table_id);
  const tableOrders = await Order.find({
    $or: [{ status: "BOOKED" }, { tableId: table_id }],
  })
    .populate("customerId")
    .populate("staffId")
    .populate("tableId")
    .exec();

  let responsePayload = {
    table: table,
    orders: tableOrders,
  };

  res.status(201).json({ message: "", data: responsePayload });
};

exports.staffBookATableController = async function (req, res) {
  var {
    user_name,
    reserved_at,
    reserved_time,
    order_status,
    order_type,
    people_count,
  } = req.body;

  // create a customer
  const now = Date.now();

  const user = new User({
    fullName: `${user_name}_${now}`,
    email: `${user_name}${now}@gmail.com`,
    password: `${user_name}_${now}`,
    role: "CUSTOMER",
    created_at: Date.now(),
    updated_at: Date.now(),
  });

  let customer = await user.save();

  // create a order
  const order = new Order({
    status: order_status,
    reserved_at: reserved_at,
    reserved_time: reserved_time,
    payment: "FALSE",
    people_count: people_count,
    type: order_type, // ["TAKEAWAY", "DINEIN"]
    created_at: Date.now(),
    updated_at: Date.now(),
    customerId: customer._id,
  });

  let customerOrder = await order.save();

  let responsePayload = {
    user: customer,
    order: customerOrder,
  };

  res.status(201).json({ message: "", data: responsePayload });
};

exports.staffAssignATableToOrder = async function (req, res) {
  var { table_id, staff_id, order_id } = req.body;

  let order = await Order.findById(order_id);

  order.tableId = table_id;
  order.staffId = staff_id;
  order.updated_at = new Date();
  order.status = "INPROGRESS";

  await order.save();

  let customerOrder = await Order.findById(order_id)
    .populate("customerId")
    .populate("staffId")
    .populate("tableId")
    .exec();

  let responsePayload = {
    order: customerOrder,
  };

  res.status(201).json({ message: "", data: responsePayload });
};

exports.staffDeleteOrder = async function (req, res) {
  var { order_id } = req.params;

  let order = await Order.findById(order_id);

  if (order) await Order.deleteOne({ _id: order_id });

  res.status(201).json({ message: "", data: "success" });
};

exports.staffUpdateTable = async function (req, res) {
  var { id, status } = req.body;

  let table = await Table.findById(id);
  table.status = status;
  await table.save();

  let responsePayload = {
    table: table,
  };

  res.status(201).json({ message: "", data: responsePayload });
};
