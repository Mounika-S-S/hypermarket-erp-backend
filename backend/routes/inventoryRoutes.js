import express from "express";
import {
  getProductsByBranch,
  createProduct,
  updateProduct
} from "../controllers/inventoryController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/:branchId", protect, getProductsByBranch);

router.post(
  "/",
  protect,
  authorize("ADMIN", "MANAGER"),
  createProduct
);

router.put(
  "/:id",
  protect,
  authorize("ADMIN", "MANAGER"),
  updateProduct
);

export default router;
