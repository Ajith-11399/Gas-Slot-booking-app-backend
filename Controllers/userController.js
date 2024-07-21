import User from "../Models/userSchema.js";
import Booking from "../Models/bookingSchema.js";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import Razorpay from "razorpay";

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
    const { email, product, quantity, fullName, address, date, timeSlot, phoneNumber, totalPrice } = req.body;

    if (!email || !product || !quantity || !fullName || !address || !date || !timeSlot || !phoneNumber || !totalPrice) {
      return res.status(400).json({ message: "All fields are mandatory!" });
    }

    // Create a new booking record in the database
    const newBooking = new Booking({
      email,
      product,
      quantity,
      fullName,
      address,
      date,
      timeSlot,
      phoneNumber,
      totalPrice,
      paymentStatus: "Pending",
    });
    await newBooking.save();

    // Initialize Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.RAZOR_PAY_ID,
      key_secret: process.env.RAZOR_PAY_SECRET_KEY,
    });

    // Create an order in Razorpay
    const options = {
      amount: Number(totalPrice) * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: newBooking._id.toString(),
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);

    if (!order || order.status !== 'created') {
      return res.status(500).json({ message: "Error in placing Razorpay order!" });
    }

    // Save the Razorpay order ID in the booking record
    newBooking.razorpayOrderId = order.id;
    await newBooking.save();

    res.status(200).json({
      message: "Your order has been placed successfully!",
      order,
    });
    console.log("Razorpay Key ID:", process.env.RAZOR_PAY_ID);
    console.log("Razorpay Secret Key:", process.env.RAZOR_PAY_SECRET_KEY);

    console.log(newBooking);
  } catch (error) {
    console.error("Error in bookGas:", error);
    res.status(500).json({ message: "An error occurred while placing the order!" });
  }
};


export const razorpayWebhook = async (req, res) => {
  try {
    const { event, payload } = req.body;

    if (event === "payment.captured") {
      const { order_id } = payload.payment.entity;
      const booking = await Booking.findOne({ razorpayOrderId: order_id });

      if (booking) {
        booking.paymentStatus = "Paid";
        await booking.save();
        res.status(200).json({ message: "Payment status updated" });
      } else {
        res.status(404).json({ message: "Booking not found" });
      }
    } else {
      res.status(400).json({ message: "Event not handled" });
    }
  } catch (error) {
    console.error("Error in razorpayWebhook:", error);
    res.status(500).json({ message: "Error in webhook handler" });
  }
};

