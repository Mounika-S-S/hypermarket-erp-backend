import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";
import {
  createSale,
  fetchSalesHistory
} from "../controllers/salesController.js";

const router = express.Router();

router.post("/", protect, createSale);

router.get(
  "/history",
  protect,
  authorize("ADMIN", "MANAGER"),
  fetchSalesHistory
);

export default router;
