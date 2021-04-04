import {getProducts, deleteProductById, getProductsById, updateProductsId, insertProducts} from "../../models/product/productModel.js";


export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results)
        }
    });
}

export const showProductById = (req, res) =>{
    getProductsById(req.params.id, (err, results) =>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const insertProduct = (req, res) =>{
    const data = req.body
    insertProducts(data, (err, results) =>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const updateProduct = (req, res) =>{
    const data = req.body
    const id = req.params.id
    updateProductsId(data, id, (err, results) =>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    })
}