import mongoose from "mongoose";
import User from "./models/User.js";

export async function createUser(req, res) {
  const { name, email, password } = req.body;

  try {
    const user = new User({
      name,
      email,
      password,
    });

    if (!name || !email || !password) {
      return alert("All fields must be filled!");
    }

    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUsers(req, res) {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
