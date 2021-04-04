import express from 'express';

import {showProducts, deleteProduct, showProductById, updateProduct,insertProduct} from '../controllers/productList/product.js';
import {showUser, showUserById, insertUser, updateUser, deleteUser, userLogin} from '../controllers/userList/user.js'


const router = express.Router();
router.get('/products', showProducts);
router.get('/products/:id', showProductById);
router.post('/products',insertProduct)
router.put('/products/:id',updateProduct) 
router.delete('/products/:id', deleteProduct);


router.get('/user', showUser)
router.get('/user/:id', showUserById)
router.post('/user/login', userLogin)
router.post('/user', insertUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

export default router;