import express from 'express';

import {showProducts, deleteProduct, showProductById, updateProduct,insertProduct} from '../controllers/productList/product.js';
import {showUser, showUserById, insertUser, updateUser, deleteUser, userLogin} from '../controllers/userList/user.js'
import {showBooking, insertBooking, getBookingById, updateBooking, deleteBooking, getBookingDetail,
    getBookingByUser, getBookingByPartner} from "../controllers/bookingList/booking.js"


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

router.get('/booking', showBooking)
router.get('/booking/:id',getBookingById)
router.post('/booking',insertBooking)
router.put('/booking/:id', updateBooking)
router.delete('/booking/:id', deleteBooking)
router.get("/all_booking", getBookingDetail)
router.get("/bookingID/:id", getBookingByUser)
router.get("/booking_partner/:id", getBookingByPartner)

export default router;