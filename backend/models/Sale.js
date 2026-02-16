import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  totalAmount: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Sale", saleSchema);
