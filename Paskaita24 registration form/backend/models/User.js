import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  email: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  password: {
    type: String,
    minLength: 4,
    maxLength: 20,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
