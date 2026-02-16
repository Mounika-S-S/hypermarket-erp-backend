import Product from "../models/Product.js";
import Sale from "../models/Sale.js";
import SaleItem from "../models/SaleItem.js";

export const processSale = async (branchId, items, userId) => {

  let totalAmount = 0;

  for (let item of items) {

    const product = await Product.findById(item.productId);

    if (!product)
      throw new Error("Product not found");

    if (item.quantity > product.quantity)
      throw new Error(`Insufficient stock for ${product.name}`);

    const lineTotal = item.quantity * product.unitPrice;

    totalAmount += lineTotal;

    product.quantity -= item.quantity;
    await product.save();
  }

  const sale = await Sale.create({
    branch: branchId,
    createdBy: userId,
    totalAmount
  });

  for (let item of items) {

    const product = await Product.findById(item.productId);

    await SaleItem.create({
      sale: sale._id,
      product: item.productId,
      quantity: item.quantity,
      price: product.unitPrice
    });
  }

  return {
    message: "Sale completed successfully",
    totalAmount
  };
};
export const getSalesHistory = async () => {
  return await Sale.find()
    .populate("branch", "name")
    .populate("createdBy", "username role")
    .sort({ createdAt: -1 });
};

