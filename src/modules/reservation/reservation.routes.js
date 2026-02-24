import { Router } from "express";
import * as controller from "./reservation.controller.js";

const router = Router();

router.post("/", controller.createReservation);
router.get("/", controller.listReservations);

export default router;