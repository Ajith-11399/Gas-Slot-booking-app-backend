import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    email: String,
    product: String,
    quantity: Number,
    fullName: String,
    address: String,
    date: String,
    timeSlot: String,
    phoneNumber: String,
    totalPrice: Number,
    paymentStatus: {
      type: String,
      default: "Pending",
    },
    razorpayOrderId: String,
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
