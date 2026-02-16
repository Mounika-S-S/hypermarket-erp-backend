import express from "express";
import {
  createUser,
  fetchAllUsers,
  fetchEmployees
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorize("ADMIN"),
  createUser
);

router.get(
  "/",
  protect,
  authorize("ADMIN"),
  fetchAllUsers
);

router.get(
  "/employees",
  protect,
  authorize("MANAGER"),
  fetchEmployees
);

export default router;
