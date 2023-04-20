const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
    enum: ["BOOKED", "INITIATED", "INPROGRESS", "CANCELLED", "SUCCESS"],
  },
  reserved_at: {
    type: String,
    required: true,
  },
  reserved_time: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
    enum: ["TRUE", "FALSE"],
  },
  people_count: {
    type: String,
    required: "required",
  },
  type: {
    type: String,
    required: true,
    enum: ["TAKEAWAY", "DINEIN"],
  },
  created_at: {
    type: Date,
    required: "required",
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: "required",
    default: Date.now,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  staffId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
    required: false,
  },
  tableId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RestaurantTable",
    default: null,
    required: false,
  },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
