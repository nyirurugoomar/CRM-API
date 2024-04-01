import express  from "express";
import { getProduct,createProduct,updateProduct,deleteProduct } from "../controller/Product.controller.js";


const router = express.Router()

router.get('/Products',getProduct);
router.post('/Products',createProduct);
router.put('/Products/:productID',updateProduct)
router.delete('/Products/:productID',deleteProduct)

export default router