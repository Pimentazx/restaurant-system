import { Router } from "express";
import restaurantRoutes from "./modules/restaurant/restaurant.routes.js";
import reviewRoutes from "./modules/review/review.routes.js";
import reservationRoutes from "./modules/reservation/reservation.routes.js";

const router = Router();

router.use("/restaurants", restaurantRoutes);
router.use("/reviews", reviewRoutes);
router.use("/reservations", reservationRoutes);

export default router;