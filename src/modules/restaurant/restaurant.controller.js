import * as service from "./restaurant.service.js";
import { Review } from "../review/review.model.js";

export const createRestaurant = async (req, res) => {
  const restaurant = await service.createRestaurant(req.body);
  res.status(201).json(restaurant);
};

export const listRestaurants = async (req, res) => {
  const restaurants = await service.listRestaurants();
  res.json(restaurants);
};

export const getRestaurant = async (req, res) => {
  const { id } = req.params;

  const restaurant = await service.getRestaurantById(id);
  if (!restaurant) {
    return res.status(404).json({ message: "Not found" });
  }

  const reviews = await Review.find({ restaurantId: id });

  const averageRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) /
    (reviews.length || 1);

  res.json({
    ...restaurant,
    averageRating,
    reviews
  });
};

export const deleteRestaurant = async (req, res) => {
  await service.deleteRestaurant(req.params.id);
  await Review.deleteMany({ restaurantId: req.params.id });
  res.status(204).send();
};