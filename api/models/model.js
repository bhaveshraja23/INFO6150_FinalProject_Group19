const mongoose = require("mongoose");

var validateEmail = function(email) {
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexEmail.test(email);
};

const validateFullName = (fullName) => {
    var regexName = /^[a-zA-Z ]{2,30}$/;
    return regexName.test(fullName);
}

const UserSchema = new mongoose.Schema({

    fullName:{
        type: String,
        required: true,
        validate:[validateFullName, "Please enter a valid full name with minimum 2 alphabets"],
    },
    email:{
        type: String,
        unique: true,
        required: "required",
        validate: [validateEmail, "Please enter a valid email address"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Enter a valid email address"],

    },

    password: {
        type: String,
        required: "required",
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;