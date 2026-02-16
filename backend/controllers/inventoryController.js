import {
  fetchProductsByBranch,
  addProduct,
  editProduct
} from "../services/inventoryService.js";

export const getProductsByBranch = async (req, res) => {
  try {
    const products = await fetchProductsByBranch(req.params.branchId);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await addProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updated = await editProduct(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
