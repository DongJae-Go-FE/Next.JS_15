import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

export const User =
  mongoose.models.user ?? mongoose.model("User", userSchema);
