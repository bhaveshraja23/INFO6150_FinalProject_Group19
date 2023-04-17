const reservationTable = require("../models/reservationModel");
var reservationTable = require("../models/reservationModel");

exports.createReservation = async function(req,res) {

    try{
        const {
            name,
            date,
            time,
            num_of_people
        } = req.body;

        console.log("name: ", req.body.name)
        console.log("date: ", req.body.date)
        console.log("time: ", req.body.time)
        console.log("num_of_people: ", req.body.num_of_people)

        if(!name || !date || !time|| !num_of_people) {
            return res.status(400).json({message: "Please enter the all the required fields"}) 
        }

        const reservationTable = new reservationTable({
            name: name,
            date: date,
            time: time,
            num_of_people: num_of_people
        })
        
        await reservationTable.save()

        res.status(201).json({message: "Successfully created a new booking"})
    } catch{
        res.status(500).json({message:"Server Error"})
    }
}

