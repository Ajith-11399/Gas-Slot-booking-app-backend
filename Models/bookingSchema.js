import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  product: { type: String },
  fullName: { type: String },
  email: { type: String },
  date: { type: String },
  timeSlot: { type: String },
  address: { type: String },
  quantity: { type: Number },
  phoneNumber: { type: String },
  totalPrice: { type: Number },
  paymentStatus: { type: String, default: "Pending" }
}, { timestamps: true });


bookingSchema.index({ email: 1 });
bookingSchema.index({ product: 1 });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
