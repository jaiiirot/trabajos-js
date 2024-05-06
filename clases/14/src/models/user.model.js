import mongoose from "mongoose";

const userColletion = "users";

const userSchema = new mongoose.Schema({
  firt_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
});

export const userModel = mongoose.model(userColletion, userSchema);

// userModel.insertOne({ firt_name: "John", last_name: "Doe", email: "johndoe@gmail.com"})
