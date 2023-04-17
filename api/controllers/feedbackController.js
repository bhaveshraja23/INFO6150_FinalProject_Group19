var Feedback = require("../models/feedbackModel");
var Order = require("../models/orderModel");

exports.createFeedbackUnderOrder = async function (req, res) {
  const { order_id } = req.params;
  const { content, rating } = req.body;

  try {
    const orders = await Order.findById(order_id);
    if (!orders) {
      return res.status(404).json({ message: "Not found" });
    }

    const feedbacks = new Feedback({
      content: content,
      rating: rating,
      created_at: Date.now(),
      updated_at: Date.now(),
      orderId: order_id,
    });

    await feedbacks.save();

    res.status(201).json({ message: "Feedback created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error occured" });
  }
};

exports.getAllFeedback = async function (req, res) {
  Feedback.find()
    .select([])
    .then((documents) => {
      res.status(200).json({
        status: 200,
        message: "Feedback has been fetched successfully",
        feedbacks: documents,
      });
    });
};

exports.getFeedbackUnderOrder = async function (req, res) {
  const { order_id } = req.params;

  try {
    const feedback = await Feedback.find({ orderId: order_id });
    if (!feedback) {
      return res.status(404).json({
        status: 404,
        message: `Not found`,
      });
    }

    res.status(200).json({
      status: 200,
      message: `Feedback fetched successfully`,
      feedback: feedback,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: `Error occurred while fetching feedback`,
      error: error.message,
    });
  }
};
