var service = require("../services/service");
var User = require("../models/userModel");
var Menu = require("../models/menuModel");
/*var MenuItem = require("../models/model");
var RestaurantTable = require("../models/model");
var Order = require("../models/model");
var OrderItem = require("../models/model");
var Feedback = require("../models/model"); */

exports.createUser = async function (req, res) {
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    created_at: Date.now(),
    updated_at: Date.now(),
  });
  user
    .save()
    .then(() => {
      res.status(201).json({
        status: 201,
        data: user,
        message: "New user has been added successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({ status: 400, message: err.message });
    });
};

exports.createMenu = async function (req, res) {
  const menu = new Menu({
    name: req.body.name,
    description: req.body.description,
    created_at: Date.now(),
    updated_at: Date.now(),
  });
  menu
    .save()
    .then(() => {
      res.status(201).json({
        status: 201,
        data: menu,
        message: "New menu has been added successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({ status: 400, message: err.message });
    });
};

/* 
exports.createMenuItem = async function (req, res) {

  const { name, description, price, menu_id} = req.body;

  if(!menu_id){
    return res.status(400).json({
      status: 400,
      message: "Invalid Menu Id",
    });
  }

  Menu.findById(menu_id).then(menu => {
    if(!menu){
      return res.status(400).json({status: 404, message:"Not found"
    });
    }

    const menuItem = new MenuItem({
      name: name,
      description: description,
      price: price,
      created_at: Date.now(),
      updated_at: Date.now(),
      menuId: menu._id,

    });

  menuItem
    .save()
    .then(() => {
      res.status(201).json({ status:201, data: menuItem,
        message: "New menu has been added successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({ status:400,
        message: err.message,
      });
    });
  })

}; */
/* 
exports.createTable = async function (req, res) {

  const { name, status, defaultStaffId } = req.body;

  if(!defaultStaffId){
    return res.status(400).json({
      status: 400,
      message: "Invalid Staff Id",
    });
  }

  User.findById(defaultStaffId).then(user => {
    if(!user){
      return res.status(400).json({status: 404, message:"Not found"
    });
    }

    const restauranttables = new RestaurantTable({
      name: name,
      status: status,
      created_at: Date.now(),
      updated_at: Date.now(),
      defaultStaffId: user._id,

    });

    restauranttables
    .save()
    .then(() => {
      res.status(201).json({ status:201, data: restauranttables,
        message: "New table has been added successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({ status:400,
        message: err.message,
      });
    });
  })

}; */

/* exports.createOrder = async function (req, res) {

  try{
    const { status, payment, people_count, type, customerId, staffId, tableId} = req.body;

    const customer = await User.findById(customerId);
    const staff = await User.findById(staffId);
    const restTable = await RestaurantTable.findById(tableId);

    if(!customer || !staff || !restTable){
      return res.status(404).json({message: "Not found"});
    }
    const orders = new Order({
      status: status,
      payment: payment,
      people_count: people_count,
      type: type,
      created_at: Date.now(),
      updated_at: Date.now(),
      customerId, staffId, tableId,
    });

    await orders.save();

    res.status(201).json({message: "Order saved", data: orders
  });
  }
  catch(error){
    res.status(500).json({message: "Error"})
  }
}; */

/* 
exports.createOrderItem = async function (req, res) {

  try{
    const { quantity, price, itemId, orderId} = req.body;

    const itemid = await MenuItem.findById(itemId);
    const order = await Order.findById(orderId);

    if(!itemid || !order){
      return res.status(404).json({message: "Not found"});
    }
    const orderitems = new OrderItem({
      created_at: Date.now(),
      updated_at: Date.now(),
      quantity: quantity,
      price: price,
      itemId, order,
    });

    await orderitems.save();

    res.status(201).json({message: "OrderItems saved", data: orderitems
  });
  }
  catch(error){
    res.status(500).json({message: "Error"})
  }
}; */
/* 
exports.createFeedbackUnderOrder = async function(req, res) {
  const { orderId } = req.params;
  const { content, rating } = req.body;

  try{
    const orders = await Order.findById(orderId);
    if(!orders){
      return res.status(404).json({message: "Not found"});
    }

    const feedbacks = new Feedback({
      content: content,
      rating: rating,
      created_at: Date.now(),
      updated_at: Date.now(),
      orderId: orderId,
    });

    await feedbacks.save();

    res.status(201).json({message: "Feedback created successfully"});
  }
  catch(error){
    res.status(400).json({message: "Error occured"});
  }
}; */

exports.getAllUsers = async function (req, res) {
  User.find()
    .select([])
    .then((documents) => {
      res.status(200).json({
        status: 200,
        message: "All the users details have been fetched successfully",
        users: documents,
      });
    });
};
//payload
/*{
  "status": 200,
  "message": "All the users details have been fetched successfully",
  "users": [
      {
          "_id": "64367762748926a8125e7855",
          "fullName": "Pavithra K",
          "email": "pavithra@gmail.com",
          "password": "Pavithra@123",
          "role": "Staff",
          "created_at": "2023-04-12T09:18:26.013Z",
          "updated_at": "2023-04-12T09:40:42.784Z",
          "__v": 0
      }
  ]
} */

/* exports.getAllMenuItems = async function (req, res) {
  MenuItem.find()
  .select([])
  .then((documents) => {
    res.status(200).json({ status: 200,
      message: "All the menu items details have been fetched successfully",
      menuitems: documents,
    });
  });
}; */

exports.getAllMenu = async function (req, res) {
  Menu.find()
    .select([])
    .then((documents) => {
      res.status(200).json({
        status: 200,
        message: "Menu details have been fetched successfully",
        menus: documents,
      });
    });
};

/* exports.getAllTables = async function (req, res) {
  RestaurantTable.find()
  .select([])
  .then((documents) => {
    res.status(200).json({ status: 200,
       message: "Tables have been fetched successfully",
       restauranttables: documents, 
      });
  });
}; */

/* exports.getAllOrders = async function (req, res) {
  Order.find()
  .select([])
  .then((documents) => {
    res.status(200).json({ status: 200,
       message: "Orders have been fetched successfully",
       orders: documents, 
      });
  });
}; */

/* exports.getAllFeedback = async function (req, res) {
  Feedback.find()
  .select([])
  .then((documents) => {
    res.status(200).json({ status: 200,
       message: "Feedback has been fetched successfully",
       feedbacks: documents, 
      });
  });
}; */

exports.getMenuById = async function (req, res) {
  try {
    const { menu_id } = req.params;

    const menu = await Menu.findById(menu_id);

    if (!menu) {
      return res.status(404).json({
        status: 404,
        message: `Menu item not found`,
      });
    }

    //const menuItems = await MenuItem.find({ menu_id : menu_id});

    res.status(200).json({
      status: 200,
      message: `Menu items fetched successfully`,
      menu: menu,
      //menuItems: menuItems
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: `Error occurred while fetching menu items`,
      error: error.message,
    });
  }
};

// exports.getAllMenuItemsByMenuId = async function(req, res) {
//   try {
//     const { menu_id } = req.params;

//     const menuitems = await MenuItem.findById(menu_id);

//     if (!menuitems) {
//       return res.status(404).json({
//         status: 404,
//         message: `Menu item not found`
//       });
//     }

//     res.status(200).json({
//       status: 200,
//       message: `Menu item fetched successfully`,
//       menuitems: menuitems
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: 500,
//       message: `Error occurred`,
//       error: error.message
//     });
//   }
// };

/* 
exports.getAllOrderItemsByOrderId = async function(req, res) {
  try {
    const { order_id } = req.params;

    const orderitems = await OrderItem.findById(order_id);

    if (!orderitems) {
      return res.status(404).json({
        status: 404,
        message: `Not found`
      });
    }

    res.status(200).json({
      status: 200,
      message: `OrderItems fetched successfully`,
      orderitems: orderitems
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: `Error occurred while fetching order item`,
      error: error.message
    });
  }
}; */

/* exports.getMenuItemById = async function(req, res) {
  try {
    const { id } = req.params;

    const menuItem = await MenuItem.findById(id);

    if (!menuItem) {
      return res.status(404).json({
        status: 404,
        message: `Menu item not found`
      });
    }

    res.status(200).json({
      status: 200,
      message: `Menu item fetched successfully`,
      menuItem: menuItem
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: `Error occurred while fetching menu item`,
      error: error.message
    });
  }
}; */

/* exports.getTableById = async function(req, res) {
  try {

    const restauranttables = await RestaurantTable.findById(req.params.id);

    if (!restauranttables) {
      return res.status(404).json({
        status: 404,
        message: `Table not found`
      });
    }

    res.status(200).json({
      status: 200,
      message: `Table fetched successfully`,
      restauranttables: restauranttables
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: `Error occurred while fetching table`,
      error: error.message
    });
  }
}; */

exports.getUserById = async function (req, res) {
  try {
    const { user_id } = req.params;

    console.log(user_id);
    const user = await User.findById(user_id);

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: `User not found`,
      });
    }

    res.status(200).json({
      status: 200,
      message: `User fetched successfully`,
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: `Error occurred while fetching user`,
      error: error.message,
    });
  }
};

/* exports.getFeedbackUnderOrder = async function(req, res){
  

  const {id} = req.params;

  try{
    const orders = await Order.findById(id);
    if(!orders){
      return res.status(404).json({message: "Not found"});
    }

    const feedbacks = await Feedback.find({orderId: id});

    res.status(200).json({message: "Successfully fetched"});
  }
  catch(error){
    res.status(500).json({message: "Cant get"});
  }
}; */

exports.editUser = async function (req, res) {
  try {
    const { user_id } = req.params;
    const { email, password, fullName, role } = req.body;
    const updated_at = new Date();

    // Validate input
    if (!email || !password || !fullName || !role) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Find the user by email
    const user = await User.findById(user_id);

    if (!user) {
      return res.status(404).json({ status: 400, message: "User not found" });
    }

    // Update the user's password and full name
    user.email = email;
    user.password = password;
    user.fullName = fullName;
    user.role = role;
    user.updated_at = updated_at;

    // Save the user
    try {
      await user.save();
      res
        .status(200)
        .json({ status: 200, message: "User has been updated successfully" });
    } catch (saveError) {
      console.error(saveError);
      res.status(500).json({ status: 400, message: "Error updating user" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 400, message: "Error processing request" });
  }
};

exports.editMenu = async function (req, res) {
  try {
    const { menu_id } = req.params;
    const { name, description } = req.body;
    const updated_at = new Date();

    // Validate input
    if (!name || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Find the menu by id
    const menu = await Menu.findById(menu_id);

    if (!menu) {
      return res.status(404).json({ status: 400, message: "Menu not found" });
    }

    menu.name = name;
    menu.description = description;
    menu.updated_at = updated_at;

    // Save the user
    try {
      await menu.save();
      res
        .status(200)
        .json({ status: 200, message: "Menu has been updated successfully" });
    } catch (saveError) {
      console.error(saveError);
      res.status(500).json({ status: 400, message: "Error updating menu" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 400, message: "Error processing request" });
  }
};

/* exports.editOrder = async function (req, res) {
  try {

      const {id} = req.params;
      const { status, payment, people_count, type } = req.body;
      const updated_at = new Date();
 
      // Validate input
      if (!status || !payment || !people_count || !type) {
        return res.status(400).json({ message: "Missing required fields" });
      }
 
      // Find the menu by id
      const orders = await Order.findById({ id });
 
      if (!orders) {
        return res.status(404).json({status: 400, message: "Order not found" });
      }
 
      orders.status = status;
      orders.payment = payment;
      orders.people_count = people_count;
      orders.type = type;
      orders.updated_at = updated_at;
 
      // Save the user
      try {
        await orders.save();
        res.status(200).json({ status:200, message: "Order has been updated successfully" });
      } catch (saveError) {
        console.error(saveError);
        res.status(500).json({ status: 400, message: "Error updating order" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 400, message: "Error processing request" });
    }
}; */

/* exports.editOrderItem = async function (req, res) {
  try {

      const {id} = req.params;
      const { quantity, price } = req.body;
      const updated_at = new Date();
 
      // Validate input
      if (!quantity || !price) {
        return res.status(400).json({ message: "Missing required fields" });
      }
 
      // Find the menu by id
      const orderitems = await OrderItem.findById({ id });
 
      if (!orderitems) {
        return res.status(404).json({status: 400, message: "Order item not found" });
      }
 
      orderitems.quantity = quantity;
      orderitems.price = price;
      orderitems.updated_at = updated_at;
 
      // Save the user
      try {
        await orderitems.save();
        res.status(200).json({ status:200, message: "OrderItem has been updated successfully" });
      } catch (saveError) {
        console.error(saveError);
        res.status(500).json({ status: 400, message: "Error updating order item" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 400, message: "Error processing request" });
    }
}; */

/* exports.editMenuItem = async function (req, res) {
  try {

      const {id} = req.params;
      const { name, description, price } = req.body;
      const updated_at = new Date();
 
      // Validate input
      if (!name || !description || !price) {
        return res.status(400).json({ message: "Missing required fields" });
      }
 
      // Find the menuitem by id
      const menuItem = await MenuItem.findById({ id });
 
      if (!menuItem) {
        return res.status(404).json({status: 400, message: "Menu Item not found" });
      }
 
      menuItem.name = name;
      menuItem.description = description;
      menuItem.price = price;
      menuItem.updated_at = updated_at;
 
      // Save the user
      try {
        await menuItem.save();
        res.status(200).json({ status:200, message: "MenuItem has been updated successfully" });
      } catch (saveError) {
        console.error(saveError);
        res.status(500).json({ status: 400, message: "Error updating menu item" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 400, message: "Error processing request" });
    }

}; */

/* exports.editTable = async function (req, res) {

  try {

      const {id} = req.params;
      const { name, status } = req.body;
      const updated_at = new Date();
 
      // Validate input
      if (!name || !status) {
        return res.status(400).json({ message: "Missing required fields" });
      }
 
      // Find the table by id
      const restauranttables = await RestaurantTable.findById({ id });
 
      if (!restauranttables) {
        return res.status(404).json({status: 400, message: "Table not found" });
      }
 
      restauranttables.name = name;
      restauranttables.status = status;
      restauranttables.updated_at = updated_at;
 
      // Save the user
      try {
        await restauranttables.save();
        res.status(200).json({ status:200, message: "Table has been updated successfully" });
      } catch (saveError) {
        console.error(saveError);
        res.status(500).json({ status: 400, message: "Error updating table" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 400, message: "Error processing request" });
    }

}; */

exports.deleteUser = async function (req, res) {
  try {
    const { user_id } = req.params;
    if (!user_id) {
      return res
        .status(400)
        .json({ status: 400, message: "Please provide a valid id" });
    }
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ status: 400, message: "User not found" });
    }
    await User.deleteOne({ _id: user_id });
    return res
      .status(200)
      .json({ status: 200, message: "User has been deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: 400, message: "Error deleting user" });
  }
};

exports.deleteMenu = async function (req, res) {
  try {
    const { menu_id } = req.params;
    if (!menu_id) {
      return res
        .status(400)
        .json({ status: 400, message: "Please provide menu id" });
    }
    const menu = await Menu.findById(menu_id);
    if (!menu) {
      return res.status(404).json({ status: 400, message: "Menu not found" });
    }
    await Menu.deleteOne({ _id: menu_id });
    return res
      .status(200)
      .json({ status: 200, message: "Menu has been deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: 400, message: "Error deleting menu" });
  }
};

/* exports.deleteMenuItem = async function (req, res) {
  try{
  if (!req.params.id) {
      return res.status(400).json({ status:400, message: "Please provide menu item id" });
    }
    const menuItem = await MenuItem.findOne({ id: req.params.id });
    if (!menuItem) {
      return res.status(404).json({ status:400, message: "Menu item not found" });
    }
    await MenuItem.deleteOne({ id: req.params.id });
    return res.status(200).json({ status:200, message: "Menu item has been deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status:400, message: "Error deleting menu item" });
  }
}; */

/* exports.deleteTable = async function (req, res) {
  try{
  if (!req.params.id) {
      return res.status(400).json({ status:400, message: "Please provide table id" });
    }
    const restauranttables = await RestaurantTable.findOne({ id: req.params.id });
    if (!restauranttables) {
      return res.status(404).json({ status:400, message: "Table not found" });
    }
    await RestaurantTable.deleteOne({ id: req.params.id });
    return res.status(200).json({ status:200, message: "Table has been deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status:400, message: "Error deleting table" });
  }
}; */

/* exports.deleteOrderItem = async function (req, res) {
  try{
  if (!req.params.id) {
      return res.status(400).json({ status:400, message: "Please provide order item id" });
    }
    const orderitems = await OrderItem.findOne({ id: req.params.id });
    if (!orderitems) {
      return res.status(404).json({ status:400, message: "Order item not found" });
    }
    await OrderItem.deleteOne({ id: req.params.id });
    return res.status(200).json({ status:200, message: "Order item has been deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status:400, message: "Error deleting order item" });
  }
}; */

exports.loginUser = async function (req, res) {
  var { email, password } = req.body;
  try {
    let user = await service.existsUser(email, password);
    if (user) {
      return res
        .status(200)
        .json({ status: 200, message: "login", exist: true, user: user });
    } else {
      return res
        .status(200)
        .json({ status: 200, message: "Enter correct details", exist: false });
    }
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
