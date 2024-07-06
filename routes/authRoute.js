import express from 'express'
import {registerController,
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController,
    } 
    from '../controller/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';


    const router=express.Router()

//ROUTING
//REGISTER
router.post('/register',registerController);

//LOGIN
router.post('/login',loginController);

//forgot pwd
router.post('/forgot-password',forgotPasswordController);



//test route
router.get('/test',requireSignIn,isAdmin,testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);



export default router 