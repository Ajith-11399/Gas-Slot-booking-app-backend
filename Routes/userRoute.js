import express from "express";
import { bookGas, loginUser, razorpayWebhook, registerUser } from "../Controllers/userController.js";

const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
router.post("/booking", bookGas)
router.post('/update-payment-status', razorpayWebhook)

export default router;
