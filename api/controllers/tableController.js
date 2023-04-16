var RestaurantTable = require("../models/restaurantTableModel");
var User = require("../models/userModel");
const mongoose = require("mongoose");

exports.createTable = async function (req, res) {
  const { name, status, defaultStaffId } = req.body;

  if (!defaultStaffId) {
    return res.status(400).json({
      status: 400,
      message: "Invalid Staff Id",
    });
  }

  User.findById(defaultStaffId).then((user) => {
    if (!user) {
      return res.status(400).json({ status: 404, message: "Not found" });
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
        res.status(201).json({
          status: 201,
          data: restauranttables,
          message: "New table has been added successfully",
        });
      })
      .catch((err) => {
        res.status(500).json({ status: 400, message: err.message });
      });
  });
};

exports.getAllTables = async function (req, res) {
  RestaurantTable.find()
    .select([])
    .then((documents) => {
      res.status(200).json({
        status: 200,
        message: "Tables have been fetched successfully",
        restauranttables: documents,
      });
    });
};

exports.getTableById = async function (req, res) {
  try {
    const { table_id } = req.params;

    const restauranttables = await RestaurantTable.findById(table_id);

    if (!restauranttables) {
      return res.status(404).json({
        status: 404,
        message: `Table not found`,
      });
    }

    res.status(200).json({
      status: 200,
      message: `Table fetched successfully`,
      restauranttables: restauranttables,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: `Error occurred while fetching table`,
      error: error.message,
    });
  }
};

exports.editTable = async function (req, res) {
  try {
    const { table_id } = req.params;
    const { name, status, defaultStaffId } = req.body;
    const updated_at = new Date();

    const isValidObjectId = mongoose.isValidObjectId(table_id);
    if (!isValidObjectId) {
      return res.status(400).json({ message: "Invalid table ID" });
    }

    console.log("id: ", table_id);

    // Validate input
    if (!name || !status) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Find the table by id
    const restauranttables = await RestaurantTable.findById(table_id);

    if (!restauranttables) {
      return res.status(404).json({ status: 400, message: "Table not found" });
    }

    restauranttables.name = name;
    restauranttables.status = status;
    restauranttables.defaultStaffId = defaultStaffId;
    restauranttables.updated_at = updated_at;

    // Save the user
    try {
      let tableData = await restauranttables.save();
      res.status(200).json({
        status: 200,
        data: tableData,
        message: "Table has been updated successfully",
      });
    } catch (saveError) {
      console.error(saveError);
      res.status(500).json({ status: 400, message: "Error updating table" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 400, message: "Error processing request" });
  }
};

exports.deleteTable = async function (req, res) {
  try {
    const { table_id } = req.params;

    console.log("Table_id: ", table_id);

    if (!table_id) {
      return res
        .status(400)
        .json({ status: 400, message: "Please provide table id" });
    }

    const isValidObjectId = mongoose.isValidObjectId(table_id);

    if (!isValidObjectId) {
      return res.status(400).json({ message: "Invalid table ID" });
    }

    const restauranttables = await RestaurantTable.findById({ _id: table_id });

    if (!restauranttables) {
      return res.status(404).json({ status: 400, message: "Table not found" });
    }

    await RestaurantTable.deleteOne({ _id: table_id });
    return res
      .status(200)
      .json({ status: 200, message: "Table has been deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: 400, message: "Error deleting table" });
  }
};
