import db from "../../config/database.js"

export const getBookings = (result) =>{
    db.query("SELECT * FROM booking LEFT JOIN booking_status ON booking.booking_status = booking_status.id", (err, results) =>{
        if(err){
            console.log(err)
            result(err, null)
        }else{
            result(null, results)
        }
    })
}

export const getBookingsById = (id, result) =>{
    db.query("SELECT * FROM booking WHERE id_booking = ?", [id], (err, results) =>{
        if (err){
            console.log(err);
            result(err, null)
        }else{
            result(null, results[0])
        }
    }) 
}

export const insertBookings = (data, result) => {
    db.query("INSERT INTO booking SET ?", [data], (err, results) =>{
        if(err){
            console.log(err)
            result(err, null)
        }else{
            result(null, results)
        }
    })
}

export const updateBookings = (data, id, result) =>{
    db.query("UPDATE booking SET id_user = ?, id_tambal_ban = ?, namauser = ?, tanggal_booking = ?, jam_booking = ?, jenis_kendaraan = ?, request = ? WHERE id_booking = ?", 
    [data.id_user, data.id_tambal_ban, data.namauser, data.tanggal_booking, data.jam_booking, data.jenis_kendaraan, data.request, id], (err, results) =>{
        if(err){
            console.log(err)
            result(err, null)
        }else{
            result(null, results)
        }
    })
}

export const deleteBookings = (id, result) => {
    db.query("DELETE FROM booking WHERE id_booking = ?", [id], (err, results) =>{
        if (err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results);
        }
    })
}

export const getBookingsDetail = (result) =>{
    db.query("SELECT * FROM `booking` LEFT JOIN list_tambal_ban ON booking.id_tambal_ban = list_tambal_ban.id_tambal_ban LEFT JOIN register ON booking.id_user = register.id_user", (err, results) =>{
        if(err){
            console.log(err)
            result(err, null)
        }else{
            result(null, results)
        }
    })
}

export const getBookingsByUserID = (id, result) => {
    db.query("SELECT * FROM `booking` LEFT JOIN list_tambal_ban ON booking.id_tambal_ban = list_tambal_ban.id_tambal_ban LEFT JOIN register ON booking.id_user = register.id_user LEFT JOIN booking_status ON booking.booking_status = booking_status.id where register.id_user = ?", [id], (err, results) => {
        if(err){
            conlose.log(err)
            result(err, null)
        }else{
            result(null, results)
        }
    })
}

export const getBookingsByPartnerID = (id, result) => {
    db.query("SELECT * FROM `booking` LEFT JOIN list_tambal_ban ON booking.id_tambal_ban = list_tambal_ban.id_tambal_ban LEFT JOIN register ON booking.id_user = register.id_user where list_tambal_ban.id_tambal_ban = ?", [id], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        }else{
            result(null, results)
        }
    })
}