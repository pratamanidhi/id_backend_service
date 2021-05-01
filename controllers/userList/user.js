import {getUsers, getUsersById, insertUsers, updateUsers, deleteUsersByID, getUsersLogin} from '../../models/user/userModel.js'

export const showUser = (req, res) =>{
    getUsers((err, results) =>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}


export const showUserById = (req, res) =>{
    getUsersById(req.params.id, (err, results) =>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const userLogin = (req, res) => {
    const data = req.body
    getUsersLogin(data, (err, results) => {
        if(results.length){
            res.send({
                status : "success",
                error : err,
                content : results
            })
        }else{
            res.send({
                status : "failed",
                error : err,
                content : "username dan password salah"
            })
        }
    })
}

export const insertUser = (req, res) => {
    const data = req.body
    insertUsers(data, (err, results) =>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })

}

export const updateUser = (req,res) =>{
    const data = req.body
    const id = req.params.id
    updateUsers(data, id, (err, results) =>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const deleteUser = (req, res) =>{
    const id = req.params.id
    deleteUsersByID(id, (err, results) =>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

