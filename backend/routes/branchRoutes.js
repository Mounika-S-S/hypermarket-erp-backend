import express from "express";
import Branch from "../models/Branch.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const branch = await Branch.create(req.body);
  res.json(branch);
});

router.get("/", async (req, res) => {
  const branches = await Branch.find();
  res.json(branches);
});

export default router;
