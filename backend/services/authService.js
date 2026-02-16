import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const loginUser = async (username, password) => {

  const user = await User.findOne({ username });
  if (!user)
    throw new Error("Invalid credentials");

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return {
    token,
    role: user.role,
    username: user.username
  };
};
