const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  content: {
    type: String,
    required: "required",
  },
  rating: {
    type: String,
    required: true,
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
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
