import {
  processSale,
  getSalesHistory
} from "../services/salesService.js";

export const createSale = async (req, res) => {
  try {
    const { branchId, items } = req.body;

    const result = await processSale(
      branchId,
      items,
      req.user.id
    );

    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const fetchSalesHistory = async (req, res) => {
  try {
    const sales = await getSalesHistory();
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
