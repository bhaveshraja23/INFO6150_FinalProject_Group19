const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "required",
  },
  description: {
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
});

const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;
