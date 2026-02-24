import { Router } from "express";
import * as controller from "./review.controller.js";

const router = Router();

router.post("/", controller.createReview);
router.get("/:restaurantId", controller.listReviews);
router.put("/:id", controller.updateReview);
router.delete("/:id", controller.deleteReview);

export default router;