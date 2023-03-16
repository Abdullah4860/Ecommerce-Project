const express=require('express');
const { getAllProducts,createProduct,updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview } = require('../controllers/productController');
const { isAuthenticatedUser, authroizeRole } = require('../middleware/auth');
const router=express.Router();


router.route('/products').get(getAllProducts)
router.route('/admin/products/new').post(isAuthenticatedUser,authroizeRole("admin"),createProduct)
router.route('/admin/product/:id')
.put(isAuthenticatedUser,authroizeRole("admin"),updateProduct)
.delete(isAuthenticatedUser,authroizeRole("admin"),deleteProduct)

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser,createProductReview);

router.route("/reviews").get(getProductReviews)
.delete(isAuthenticatedUser,deleteReview)

module.exports=router