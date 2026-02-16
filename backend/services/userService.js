import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const createNewUser = async (username, email, password, role) => {

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error("Username already exists");
  }

  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw new Error("Email already exists");
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashed,
    role
  });

  return user;
};
export const getAllUsers = async () => {
  return await User.find().select("-password");
};

export const getEmployeesOnly = async () => {
  return await User.find({ role: "EMPLOYEE" }).select("-password");
};

