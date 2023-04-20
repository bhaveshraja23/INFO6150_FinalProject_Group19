const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


// var validateEmail = function (email) {
//   var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return regexEmail.test(email);
// };

// const validateFullName = (fullName) => {
//   var regexName = /^[a-zA-Z ]{2,30}$/;
//   return regexName.test(fullName);
// };

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    // validate: [
    //   "Please enter a valid full name with minimum 2 alphabets",
    // ],
  },
  email: {
    type: String,
    unique: true,
    required: "required",
    // validate: ["Please enter a valid email address"],
    // match: [
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //   "Enter a valid email address",
    // ],
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


UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
