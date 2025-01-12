const express=require('express');
const router=express.Router();
const {
    Signup,
    verifyOtp,
    Login
} = require('../Controller/userController');
const {
    allProduct,
    productLoad,
    productSingleView,
} = require('../Controller/productController');
const {
    getCart,
    addToCart,
} = require('../Controller/cartController');

const {protect}=require('../Middleware/AuthMiddleware');



router.route('/signup').post(Signup); //Create Account
router.route('/login').post(Login); //Login Account 
router.route('/verifyOtp').post(verifyOtp); //OTP VERIFICATION

router.route('/allProduct').get(allProduct); //Getting ALL Product
router.route('/product/:categoryName').get(productLoad); //RENDERING  PRODUCT ACCORDING TO CATEGORY 
router.route('/productView/:id').get(productSingleView);  //RENDERING DETAILS OF SINGLE PRODUCT

router.route('/cart').get(protect,getCart); //Getting  Cart
router.route('/cart').post(protect,addToCart); //Adding cart



module.exports=router;