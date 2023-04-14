var Order = require("../models/orderModel");
var OrderItem = require("../models/orderItemsModel");

exports.createOrder = async function (req, res) {

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
  };

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
};

exports.getAllOrders = async function (req, res) {
    Order.find()
    .select([])
    .then((documents) => {
      res.status(200).json({ status: 200,
         message: "Orders have been fetched successfully",
         orders: documents, 
        });
    });
  };

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
};

exports.editOrder = async function (req, res) {
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
};

exports.editOrderItem = async function (req, res) {
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
};

exports.deleteOrderItem = async function (req, res) {
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
  };

