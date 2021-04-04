import db from "../../config/database.js"


//get all data from table list tambal ban
export const getProducts = (result) => {
    db.query("SELECT * FROM list_tambal_ban", (err, results) =>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results);
        }
    });
}

//get data from table by ID
export const getProductsById = (id, result) =>{
    db.query("SELECT * FROM list_tambal_ban WHERE id_tambal_ban = ?", [id], (err, results) =>{
        if (err){
            console.log(err);
            result(err, null)
        }else{
            result(null, results[0])
        }
    }) 
}

//insert data to table
export const insertProducts = (data, result) => {
    db.query("INSERT INTO list_tambal_ban SET ?", [data], (err, results) =>{
        if (err){
            console.log(err);
            result(err, null)
        }else{
            result(null, results)
        }
    })
}

//update data from table by id
export const updateProductsId = (data, id, result) =>{
    db.query("UPDATE list_tambal_ban SET latitude = ?, longitude = ?, nama_tambal_ban = ?, deskripsi = ?, jam_operasi = ?, alamat = ?, detail_harga = ?, harga = ?, no_telepon = ? WHERE id_tambal_ban = ?",
    [data.latitude, data.longitude, data.nama_tambal_ban, data.deskripsi, data.jam_operasi, data.alamat, data.detail_harga, data.harga, data.no_telepon, id], (err, results) =>{
       if(err){
           console.log(err)
           result(err,null)
       }else{
           result(null, results)
       }
   })
}

//delete data from table list tambal ban
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM list_tambal_ban WHERE id_tambal_ban = ?", [id], (err, results) =>{
        if (err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results);
        }
    })
}