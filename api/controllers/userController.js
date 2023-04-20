var service = require("../services/service");
var User = require("../models/userModel");
var Order = require("../models/orderModel");
const bcrypt = require('bcrypt');


exports.createUser = async function (req, res) {

  const {fullName, email, password, role} = req.body;

  try {

  //   const salt = await bcrypt.genSalt(10);
  //   this.password = await bcrypt.hash(this.password, salt);
  //  const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      fullName,
      email,
      password,
      role,
      created_at: Date.now(),
      updated_at: Date.now(),
  });

    const customer = await user.save();
    res.status(201).json(customer);

  } catch (err) {
    res.status(500).json({ status: 400, message: err.message });
  }
};


  // if (user.role === 'Customer') {
  //   console.log(req.body);
  //   const order = new Order({
  //     status: "PENDING",
  //     payment: null, 
  //     people_count: null, 
  //     type: null, 
  //     created_at: Date.now(),
  //     updated_at: Date.now(),
  //     customerId: customer._id,
  //     staffId: null,
  //     tableId: null, 
    //});
  //   try {
  //     await order.save();
  //     res.status(201).json({
  //       status: 201,
  //       data: { customer, order },
  //       message: "New user and order have been added successfully",
  //     });
  //   } catch (err) {
  //     res.status(500).json({ status: 400, message: err.message });
  //   }
  // } else {
  //   res.status(201).json({
  //     status: 201,
  //     data: customer,
  //     message: "New user has been added successfully",
  //   });

//};

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
