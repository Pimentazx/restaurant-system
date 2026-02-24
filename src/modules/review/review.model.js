import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  restaurantId: { type: String, required: true },
  userName: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  visitDate: Date
}, { timestamps: true });

export const Review = mongoose.model("Review", reviewSchema);