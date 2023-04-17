const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
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
  quantity: {
    type: String,
    required: "required",
  },
  price: {
    type: String,
    required: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuItem",
    required: true,
  },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
});

const OrderItem = mongoose.model("OrderItem", OrderItemSchema);

module.exports = OrderItem;
