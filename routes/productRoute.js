import express from 'express'
import { brainTreePaymentController, braintreeTokenController, createProductcontroller, deleteProductController, getProductController, getSingleProductController, 
  productCategoryController, 
  productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from '../controller/productController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import formidable from 'express-formidable'


const router=express.Router()

//routes
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductcontroller)

router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );
//get products
router.get("/get-product", getProductController);

router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

router.get("/product-list/:page", productListController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router