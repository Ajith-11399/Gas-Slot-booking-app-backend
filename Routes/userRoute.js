import express from "express";
import { bookGas, loginUser, registerUser } from "../Controllers/userController.js";

const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
router.post("/booking", bookGas)

export default router;
