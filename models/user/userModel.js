import db from "../../config/database.js"

export const getUsers = (result) => {
    db.query("SELECT * FROM register LEFT JOIN account_type ON register.account_type = account_type.id", (err, results) =>{
        if(err){
            console.log(err)
            result(err, null)
        }else{
            result(null, results)
        }
    })
}

export const getUsersLogin = (data, result) =>{
    db.query("SELECT * FROM register WHERE `username` = ? AND `password` = ? AND `account_type` = ?", [data.username, data.password, data.account_type], (err, results) =>{
        if(err){
            console.log(err)
            result(err, null)
        }else{
            result(null, results)
        }
    })
}

export const getUsersById = (id, result) =>{
    db.query("SELECT * FROM register WHERE id_user =  ?", [id], (err, results) =>{
        if (err){
            console.log(err);
            result(err, null)
        }else{
            result(null, results[0])
        }
    }) 
}

export const insertUsers = (data, result) => {
    db.query("INSERT INTO register SET ?", [data], (err, results) =>{
        if(err){
            console.log(err)
            result(err,null)
        }else{
            result(null, results)
        }
    })
}

export const updateUsers = (data, id, result) =>{
    db.query("UPDATE register SET username = ?, password = ?, namauser = ? WHERE id_user =  ?",
    [data.username, data.password, data.namauser, id], (err, results) =>{
        if(err){
            console.log(err)
            result(err, null)
        }else{
            result(null, results)
        }
    })
}

export const deleteUsersByID = (id, result) =>{
    db.query("DELETE FROM register WHERE id_user = ?", [id], (err,results) =>{
        if(err){
            console.log(err)
            result(err, null);
        }else{
            result(null, results)
        }
    })
}