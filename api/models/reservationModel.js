const mongoose = require("mongoose");

const reservationTableSchema = new mongoose.Schema({

    name: {
        type: string,
        required: "required"
    },

    date:{
        type: date,
        required: "required"
    },

    time:{
        type: time,
        required: "required"
    },

    num_of_people:{
        type: number,
        required: "required"
    }

})

const reservationTable = mongoose.model("reservationTable", reservationTableSchema);

module.exports = reservationTable;