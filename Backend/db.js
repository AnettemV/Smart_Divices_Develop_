import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";


const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://5BTICS:anetteProPapu@cluster0.j6oleid.mongodb.net/";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB Connected Succesfully");
    } catch (error) {
      console.error("MongoDB Connection Failed:", error);
     }
    };