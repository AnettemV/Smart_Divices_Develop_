import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(" MongoDB conectado correctamente");
  } catch (error) {
    console.error(" Error conectando a MongoDB:", error);
  }
};

