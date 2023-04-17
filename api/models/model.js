const mongoose = require("mongoose");

var validateEmail = function (email) {
  var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regexEmail.test(email);
};

const validateFullName = (fullName) => {
  var regexName = /^[a-zA-Z ]{2,30}$/;
  return regexName.test(fullName);
};

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    validate: [
      validateFullName,
      "Please enter a valid full name with minimum 2 alphabets",
    ],
  },
  email: {
    type: String,
    unique: true,
    required: "required",
    validate: [validateEmail, "Please enter a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Enter a valid email address",
    ],
  },

  password: {
    type: String,
    required: "required",
  },
  role: {
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

const MenuItemSchema = new mongoose.Schema({
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

const OrderSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
    enum: ["BOOKED", "INITIATED", "INPROGRESS", "CANCELLED", "SUCCESS"],
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
    required: true,
  },
  tableId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RestaurantTable",
    required: true,
  },
});

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

const FeedbackSchema = new mongoose.Schema({
  content: {
    type: String,
    required: false,
  },
  rating: {
    type: String,
    required: false,
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
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: false,
  },
});

//const User = mongoose.model("User", UserSchema);
const Menu = mongoose.model("Menu", MenuSchema);
const MenuItem = mongoose.model("MenuItem", MenuItemSchema);
const RestaurantTable = mongoose.model(
  "RestaurantTable",
  RestaurantTableSchema
);
const Order = mongoose.model("Order", OrderSchema);
const OrderItem = mongoose.model("OrderItem", OrderItemSchema);
const Feedback = mongoose.model("Feedback", FeedbackSchema);

//module.exports = User;
module.exports = Menu;
module.exports = MenuItem;
module.exports = RestaurantTable;
module.exports = Order;
module.exports = OrderItem;
module.exports = Feedback;
