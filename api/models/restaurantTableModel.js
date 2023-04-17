const mongoose = require("mongoose");

const RestaurantTableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "required",
  },
  status: {
    type: String,
    required: true,
    enum: ["OCCUPIED", "EMPTY"],
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
  defaultStaffId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const RestaurantTable = mongoose.model(
  "RestaurantTable",
  RestaurantTableSchema
);

module.exports = RestaurantTable;
