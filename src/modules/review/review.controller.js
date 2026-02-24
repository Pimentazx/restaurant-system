import { Review } from "./review.model.js";

export const createReview = async (req, res) => {
  const review = await Review.create(req.body);
  res.status(201).json(review);
};

export const listReviews = async (req, res) => {
  const reviews = await Review.find({
    restaurantId: req.params.restaurantId
  });
  res.json(reviews);
};

export const updateReview = async (req, res) => {
  const review = await Review.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(review);
};

export const deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.status(204).send();
};