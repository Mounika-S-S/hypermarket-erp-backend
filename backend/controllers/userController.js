
import {
  createNewUser,
  getAllUsers,
  getEmployeesOnly
} from "../services/userService.js";


export const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const user = await createNewUser(
      username,
      email,
      password,
      role
    );

    res.status(201).json(user);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const fetchAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchEmployees = async (req, res) => {
  try {
    const users = await getEmployeesOnly();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
