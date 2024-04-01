import express from 'express'
import { signup,signin,signout,resetPassword } from '../controller/auth.controller.js'

const router = express.Router()

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.post("/resetPassword", resetPassword);

export default router