import express from 'express';
import  {userSignup,loginUser}  from '../controller/user-controller.js';
import {products,productDetails} from '../controller/product-controller.js';

const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',loginUser);

router.get('/products',products);
router.get("/product/:id",productDetails)

export default router;

