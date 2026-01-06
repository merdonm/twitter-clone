import mongoose from "mongoose";
import { MONGO_URI } from "../config/env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(`Error in connecting DB ${error}`);
    process.exit(1);
  }
};

export default connectDB;
