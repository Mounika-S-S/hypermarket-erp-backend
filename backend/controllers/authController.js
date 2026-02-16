import { loginUser } from "../services/authService.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await loginUser(username, password);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
