import mongoose from 'mongoose'
import dotenv from "dotenv";

dotenv.config()

export default async () => {
    try {
        const monogUri = process.env.MONGO_URI
        
        if (!monogUri) {
            throw new Error("MongoDB connection string not provided in environment variables in auth-service");
        }
        await mongoose.connect(monogUri.trim())
        console.log("🍃 MongoDB connected successfully ---> auth-server 🍃");
        
    } catch (error: any) {
        console.error(`🍁 Database Connection failed ---> auth-server  🍁`);
        console.error(error.message);
        process.exit(1)
    }
}