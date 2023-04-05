const e = require("express");
const bcrypt = require('bcrypt');
const salt = 8;

//password validation is given here instead of the schema
var valPassword = function (password) {
    var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    return regexPassword.test(password);
};

var User = require("../models/model");
//added fullname
exports.createUser = async function (fullName, email, password) {
    try {
        if (!valPassword(password)) {
            throw new Error("Invalid password");
        }
        const hashed = await bcrypt.hash(password, salt);
        var user = await User.create({ fullName, email, password: hashed });
        return user;
    } catch (e) {
        throw e;
    }
};

exports.getAllUsers = async function () {
    try {
        var user = User.find();
        return user;
    } catch(err){
        throw e;
    }
};

exports.existsUser = async function (email, password) {
    try {
        var user = await User.findOne({ email: email });
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        } else {
            return null;
        }
    } catch (e) {
        throw e;
    }
};

exports.editUser = async function(fullName, email, password){
    try{
        await User.findOneAndUpdate({fullName, email, password});
    } catch(err){
        throw err;
    }
};

exports.deleteUser = async function(email){
    try{
        await User.deleteOne({email});
    } catch(err){
        throw err;
    }
};