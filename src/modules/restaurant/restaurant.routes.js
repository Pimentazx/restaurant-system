import { Router } from "express";
import * as controller from "./restaurant.controller.js";

const router = Router();

router.post("/", controller.createRestaurant);
router.get("/", controller.listRestaurants);
router.get("/:id", controller.getRestaurant);
//router.put("/:id", controller.updateRestaurant);
router.delete("/:id", controller.deleteRestaurant);

export default router;