import {getBookings, insertBookings, getBookingsById, updateBookings, deleteBookings, getBookingsDetail,
    getBookingsByUserID, getBookingsByPartnerID} from "../../models/booking/bookingModel.js"

export const showBooking = (req, res) =>{
    getBookings((err, results) =>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const getBookingById = (req, res) =>{
    getBookingsById(req.params.id, (err, results) =>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
} 

export const insertBooking = (req, res) =>{
    const data = req.body
    insertBookings(data, (err, results) =>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })

}

export const updateBooking = (req, res) => {
    const data = req.body
    const id = req.params.id
    updateBookings(data, id, (err, results) =>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const deleteBooking = (req, res) => {
    const id = req.params.id;
    deleteBookings(id, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    })
}

export const getBookingDetail = (req, res) => {
    getBookingsDetail((err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results)
        }
    });

}

export const getBookingByUser = (req, res) => {
    const id = req.params.id
    getBookingsByUserID(id, (err, results) =>{
        if(results.length){
            res.send({
                status : "success",
                error : err,
                content : results
            })
        }else{
            res.send({
                status : "invalid",
                error : err,
                content : "tidak ada pesanan"
            })
        }
    })
}

export const getBookingByPartner = (req, res) => {
    const id = req.params.id
    getBookingsByPartnerID(id, (err, results) =>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}