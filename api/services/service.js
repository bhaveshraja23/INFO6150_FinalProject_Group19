const e = require("express");
const bcrypt = require("bcrypt");
const salt = 8;

//password validation is given here instead of the schema
var valPassword = function (password) {
  var regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  return regexPassword.test(password);
};

var User = require("../models/userModel");
var Menu = require("../models/menuModel");
/*var MenuItem = require("../models/model");
var RestaurantTable = require("../models/model");
var Order = require("../models/model");
var OrderItem = require("../models/model");
var Feedback = require("../models/model"); */

//User
//added fullname
exports.createUser = async function (fullName, email, password, role) {
  try {
    if (!valPassword(password)) {
      throw new Error("Invalid password");
    }
    const user = await User.create({ fullName, email, password, role });
    return user;
  } catch (e) {
    throw e;
  }
};

exports.createMenu = async function (name, description) {
  try {
    const menu = await Menu.create({ name, description });
    return menu;
  } catch (e) {
    throw e;
  }
};

/*exports.createMenuItem = async function (name, description, price, menu_id) {
    try {

        const menu = await Menu.findById(menu_id);
        if(!menu){
            throw new Error('Menu not found');
        }
        const menuitem = await MenuItem.create({ 
            name: name,
            description: description,
            price: price,
            created_at: Date.now(),
            updated_at: Date.now(),
            menu_id: menu._id,
        });

        return menuitem;
    } catch (e) {
        throw e;
    }
};

exports.createTable = async function (name, status, defaultStaffId) {
    try {

        const staff = await User.findById(defaultStaffId);
        if(!staff){
            throw new Error('Menu not found');
        }
        const restauranttables = await RestaurantTable.create({ 
            name: name,
            status: status,
            created_at: Date.now(),
            updated_at: Date.now(),
            defaultStaffId: staff._id,
        });
        
        return restauranttables;
    } catch (e) {
        throw e;
    }
};

exports.createOrder = async function (status, payment, people_count, type, customerId, staffId, tableId) {
    try {

        const customer = await User.findById(customerId);
        const staff = await User.findById(staffId);
        const restTable = await RestaurantTable.findById(tableId);

        if(!customer || !staff || !restTable){
        return res.status(404).json({message: "Not found"});
        }

        const orders = await Order.create({ 
            status: status,
            payment: payment,
            people_count: people_count,
            type: type,
            created_at: Date.now(),
            updated_at: Date.now(),
            customerId, staffId, tableId,
        });
        
        return orders;
    } catch (e) {
        throw e;
    }
};

exports.createOrderItem = async function (quantity, price, itemId, orderId) {
    try {

        const itemid = await MenuItem.findById(itemId);
        const order = await Order.findById(orderId);

        if(!itemid || !order){
        return res.status(404).json({message: "Not found"});
        }

        const orderitems = await OrderItem.create({ 
            created_at: Date.now(),
            updated_at: Date.now(),
            quantity: quantity,
            price: price,
            itemId, order,
        });
        
        return orderitems;
    } catch (e) {
        throw e;
    }
};

exports.createFeedbackUnderOrder = async function (content, rating, orderId) {
    try {

        const order = await Order.findById(orderId);

        if(!order){
        return res.status(404).json({message: "Not found"});
        }

        const feedbacks = await Feedback.create({ 
            created_at: Date.now(),
            updated_at: Date.now(),
            content: content,
            rating: rating,
            order: order._id,
        });
        
        return feedbacks;
    } catch (e) {
        throw e;
    }
};
 */
exports.getAllUsers = async function () {
  try {
    var user = User.find();
    return user;
  } catch (err) {
    throw e;
  }
};

/* exports.getAllMenuItems = async function () {
    try {
        var menuitems = MenuItem.find();
        return menuitems;
    } catch(err){
        throw e;
    }
}; */

exports.getAllMenu = async function () {
  try {
    var menu = Menu.find();
    return menu;
  } catch (err) {
    throw e;
  }
};

exports.getMenuById = async function (menu_id) {
  try {
    const menu = await Menu.findById(menu_id);
    if (!menu) {
      throw new Error("Not found");
    }
    return menu;
  } catch (err) {
    throw e;
  }
};

// exports.getAllMenuItemsByMenuId = async function (menu_id) {
//     try {

//         const menuitems = await MenuItem.find({menu_id: menu_id});
//         if(!menuitems){
//             throw new Error('Not found');
//         }
//         return menuitems;
//     } catch(err){
//         throw e;
//     }
// };

/*exports.getAllTables = async function () {
    try {
        var restauranttables = RestaurantTable.find();
        return restauranttables;
    } catch(err){
        throw e;
    }
};

exports.getAllOrders = async function () {
    try {
        var orders = Order.find();
        return orders;
    } catch(err){
        throw e;
    }
};

exports.getAllFeedback = async function () {
    try {
        var feedbacks = Feedback.find();
        return feedbacks;
    } catch(err){
        throw e;
    }
};





exports.getAllOrderItemsByOrderId = async function (order_id) {
    try {

        const orderitems = await OrderItem.find({order_id: order_id});
        if(!orderitems){
            throw new Error('Not found');
        }
        return orderitems;
    } catch(err){
        throw e;
    }
};

exports.getMenuItemById = async function (menu_item_id) {
    try {

        const menuitems = await MenuItem.findById(menu_item_id);
        if(!menuitems){
            throw new Error('Not found');
        }
        return menuitems;
    } catch(err){
        throw e;
    }
};

exports.getTableById = async function (tableId) {
    try {

        const restauranttables = await RestaurantTable.findById(tableId);
        if(!restauranttables){
            throw new Error('Not found');
        }
        return restauranttables;
    } catch(err){
        throw e;
    }
}; */

exports.getUserById = async function (userid) {
  try {
    const user = await User.findById(userid);
    if (!user) {
      throw new Error("Not found");
    }
    return user;
  } catch (err) {
    throw e;
  }
};

/* exports.getFeedbackUnderOrder = async function (order_id) {
    try {

        const feedbacks = await Feedback.find({order_id: order_id});
        if(!feedbacks){
            throw new Error('Not found');
        }
        return feedbacks;
    } catch(err){
        throw e;
    }
}; */

exports.existsUser = async function (email, password) {
  try {
    var user = await User.findOne({ email: email });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else {
      return null;
    }
  } catch (e) {
    throw e;
  }
};

exports.editUser = async function (fullName, email, password, role, userid) {
  try {
    const user = await User.findById(userid);
    if (!user) {
      throw new Error("User not found");
    }

    user.fullName = fullName;
    user.email = email;
    user.password = password;
    user.role = role;
    user.updated_at = new Date();

    const userr = await user.save();

    return userr;
  } catch (err) {
    throw err;
  }
};

exports.editMenu = async function (name, description, menu_id) {
  try {
    const menu = await Menu.findById(menu_id);
    if (!menu) {
      throw new Error("User not found");
    }

    menu.name = name;
    menu.description = description;
    menu.updated_at = new Date();

    const menuu = await menu.save();

    return menuu;
  } catch (err) {
    throw err;
  }
};

/* exports.editOrder = async function(status, payment, people_count, type, order_id){
    try{

        const orders = await Order.findById(order_id);
        if(!orders){
            throw new Error('User not found');
        }

        orders.status = status;
        orders.payment = payment;
        orders.people_count = people_count;
        orders.type = type;
        orders.updated_at = new Date();

        const orderss = await orders.save();

        return orderss;

    } catch(err){
        throw err;
    }
};

exports.editOrderItem = async function(quantity, price, order_item_id){
    try{

        const orderitems = await OrderItem.findById(order_item_id);
        if(!orderitems){
            throw new Error('User not found');
        }

        orderitems.quantity = quantity;
        orderitems.price = price;
        orderitems.updated_at = new Date();

        const orderitemss = await orderitems.save();

        return orderitemss;

    } catch(err){
        throw err;
    }
};

exports.editMenuItem = async function(name, description, price, menu_item_id){
    try{

        const menuitems = await MenuItem.findById(menu_item_id);
        if(!menuitems){
            throw new Error('User not found');
        }

        menuitems.name = name;
        menuitems.description = description;
        menuitems.price = price;
        menuitems.updated_at = new Date();

        const menusitems = await menuitems.save();

        return menusitems;

    } catch(err){
        throw err;
    }
};

exports.editTable = async function(name, status, table_id){
    try{

        const restauranttables = await RestaurantTable.findById(table_id);
        if(!restauranttables){
            throw new Error('User not found');
        }

        restauranttables.name = name;
        restauranttables.status = status;
        restauranttables.updated_at = new Date();

        const tabless = await restauranttables.save();

        return tabless;

    } catch(err){
        throw err;
    }
}; */

exports.deleteUser = async function (id) {
  try {
    await User.deleteOne({ _id: id });
  } catch (err) {
    throw err;
  }
};

exports.deleteMenu = async function (id) {
  try {
    await Menu.deleteOne({ _id: id });
  } catch (err) {
    throw err;
  }
};

/*exports.deleteMenuItem = async function(id){
    try{
        await MenuItem.deleteOne({_id: id});
    } catch(err){
        throw err;
    }
};

exports.deleteTable = async function(id){
    try{
        await RestaurantTable.deleteOne({_id: id});
    } catch(err){
        throw err;
    }
};

exports.deleteOrderItem = async function(id){
    try{
        await OrderItem.deleteOne({_id: id});
    } catch(err){
        throw err;
    }
}; */
