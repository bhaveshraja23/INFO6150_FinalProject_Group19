const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    status:{
        type: String,
        required: true,
        enum: ["BOOKED", "INITIATED", "INPROGRESS", "CANCELLED", "SUCCESS"],
    },
    payment:{
        type: String,
        required: true,
        enum: ["TRUE", "FALSE"],
    },
    people_count:{
        type: String,
        required: "required",
    },
    type:{
        type: String,
        required: true,
        enum: ["TAKEAWAY", "DINEIN"],
    },
    created_at:{
        type: Date,
        required: "required",
        default: Date.now,
    },
    updated_at: {
        type: Date,
        required: "required",
        default: Date.now,
    },
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    staffId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tableId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RestaurantTable',
        required: true,
    }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
