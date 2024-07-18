import User from "../Models/userSchema.js";
import Booking from "../Models/bookingSchema.js";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists!" });
    }

    const hashpassword = await bcryptjs.hash(password, 10);

    const newUser = new User({ name, email, phone, password: hashpassword });
    await newUser.save();

    res.status(200).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Registration was failed!" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userDetail = await User.findOne({ email });
    if (!userDetail) {
      return res.status(401).json({ message: "user not found!" });
    }
    const passwordMatch = await bcryptjs.compare(password, userDetail.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password!" });
    }
    res.status(200).json({ message: "User logged-in successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Login was failed!" });
  }
};

export const bookGas = async (req, res) => {
  try {
    console.log("Request Body:", req.body); 
    const { email, product, quantity, fullName, address, date, timeSlot, phoneNumber, totalPrice } = req.body;

    if (!email || !product || !quantity || !fullName || !address || !date || !timeSlot || !phoneNumber || !totalPrice) {
      return res.status(400).json({ message: "All fields are mandatory!" });
    }

    const newBooking = new Booking({ email, product, quantity, fullName, address, date, timeSlot, phoneNumber, totalPrice });
    await newBooking.save();

    res.status(200).json({ message: "Your order has been placed successfully!" });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Booking was failed!" });
  }
};