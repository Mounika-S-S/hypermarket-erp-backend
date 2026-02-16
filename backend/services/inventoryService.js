import Product from "../models/Product.js";

export const fetchProductsByBranch = async (branchId) => {
  return await Product.find({ branch: branchId });
};

export const addProduct = async (data) => {
  return await Product.create(data);
};

export const editProduct = async (id, data) => {
  const product = await Product.findById(id);
  if (!product) throw new Error("Product not found");

  if (data.quantity !== undefined && data.quantity < 0) {
    throw new Error("Quantity cannot be negative");
  }

  product.name = data.name ?? product.name;
  product.quantity = data.quantity ?? product.quantity;
  product.unitPrice = data.unitPrice ?? product.unitPrice;

  await product.save();
  return product;
};

