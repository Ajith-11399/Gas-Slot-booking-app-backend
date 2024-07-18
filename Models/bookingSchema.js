import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  product: String,
  fullName: String,
  email: String,
  date: String,
  timeSlot: String,
  address: String,
  quantity: String,
  phoneNumber: String,
  totalPrice: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
