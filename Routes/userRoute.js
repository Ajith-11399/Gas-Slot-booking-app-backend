import express from "express";
import { loginUser, registerUser } from "../Controllers/userController.js";

const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);

export default router;
