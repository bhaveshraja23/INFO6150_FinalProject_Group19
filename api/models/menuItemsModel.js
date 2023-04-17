const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "required",
  },
  description: {
    type: String,
    required: "required",
  },
  price: {
    type: String,
    required: "required",
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
  menuId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
    required: true,
  },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
