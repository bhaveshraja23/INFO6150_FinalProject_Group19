var UserModel = require("../models/userModel");

exports.loginUser = async function (req, res) {
  var { email, password } = req.body;

  try {
    if (email && password) {
      var findUser = await UserModel.findOne({
        email: email,
        password: password,
      });
      if (findUser) {
        return res.status(200).json({ data: findUser });
      } else {
        return res
          .status(400)
          .json({ message: "Enter correct details", exist: false });
      }
    }

    return res.status(400).json({
      message: "Please submit with fields email and password",
      exist: false,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
