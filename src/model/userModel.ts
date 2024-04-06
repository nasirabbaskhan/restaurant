import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  city: String,
  address: String,
  contect: String,
});

export const userSchema =
  mongoose.models.users || mongoose.model("users", userModel);
