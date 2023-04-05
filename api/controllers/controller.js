var service = require("../services/service");
var User = require("../models/model");

exports.createUser = async function (req, res) {

    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
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

exports.editUser = async function (req, res) {
    try {
        const { email, password, fullName } = req.body;
   
        // Validate input
        if (!email || !password || !fullName) {
          return res.status(400).json({ message: "Missing required fields" });
        }
   
        // Find the user by email
        const user = await User.findOne({ email });
   
        if (!user) {
          return res.status(404).json({status: 400, message: "User not found" });
        }
   
        // Update the user's password and full name
        user.password = password;
        user.fullName = fullName;
   
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
    if (!req.body.email) {
        return res.status(400).json({ status:400, message: "Please provide an email" });
      }
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({ status:400, message: "User not found" });
      }
      await User.deleteOne({ email: req.body.email });
      return res.status(200).json({ status:200, message: "User has been deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status:400, message: "Error deleting user" });
    }
};

exports.loginUser = async function (req, res) {
    var {email, password} = req.body;
    try {
        let user = await service.existsUser(email, password);
        if (user) {
            return res.status(200).json({status:200, message:"login", exist:true, user: user});
        } else {
            return res.status(200).json({status: 200, message: "Enter correct details", exist: false});
        }
    } catch(e) {
        return res.status(400).json({status:400, message:e.message});
    }
};
