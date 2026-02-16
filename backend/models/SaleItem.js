import mongoose from "mongoose";

const saleItemSchema = new mongoose.Schema({
  sale: { type: mongoose.Schema.Types.ObjectId, ref: "Sale" },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: Number,
  price: Number
});

export default mongoose.model("SaleItem", saleItemSchema);
