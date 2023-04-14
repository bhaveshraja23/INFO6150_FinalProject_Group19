var service = require("../services/service");
var User = require("../models/userModel");


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
          res.status(201).json({ status:201, data: user,
            message: "New user has been added successfully",
          });
        })
        .catch((err) => {
          res.status(500).json({ status:400,
            message: err.message,
          });
        });
};

exports.getAllUsers = async function (req, res) {
    User.find()
    .select([])
    .then((documents) => {
      res.status(200).json({ status: 200,
        message: "All the users details have been fetched successfully",
        users: documents,
      });
    });
};

exports.getUserById = async function(req, res) {
    try {
  
      const {user_id} = req.params;
  
      console.log(user_id);
      const user = await User.findById(user_id);
  
      if (!user) {
        return res.status(404).json({
          status: 404,
          message: `User not found`
        });
      }
  
      res.status(200).json({
        status: 200,
        message: `User fetched successfully`,
        user: user
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: `Error occurred while fetching user`,
        error: error.message
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
        return res.status(404).json({status: 400, message: "User not found" });
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
        res.status(200).json({ status:200, message: "User has been updated successfully" });
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
    try{

    const {user_id} = req.params;
    if (!user_id) {
        return res.status(400).json({ status:400, message: "Please provide a valid id" });
      }
      const user = await User.findById(user_id);
      if (!user) {
        return res.status(404).json({ status:400, message: "User not found" });
      }
      await User.deleteOne({_id: user_id});
      return res.status(200).json({ status:200, message: "User has been deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status:400, message: "Error deleting user" });
    }
}; 