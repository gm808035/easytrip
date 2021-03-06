import {TripController} from "../controller/TripController";
import {Router} from "express";


const router = Router();
router.get("/", TripController.all);
router.get("/:id", TripController.one)
router.post("/", TripController.save);
router.post("/search", TripController.search);
router.post("/myTrips/", TripController.myTrips);
router.post("/order", TripController.order);
router.delete("/:id", TripController.remove);
router.put("/:id",TripController.edit);

export default router;
