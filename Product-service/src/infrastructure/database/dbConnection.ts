import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


export default async () => {
    try{

        const mongourl = process.env.MONGO_URI;

        if(!mongourl){
            throw new Error("MongoDB connection string not provided in environement variables in auth-service");

        }

        await mongoose.connect(mongourl.trim());

        console.log(" MongoDb connected successfully ---> product service ");
        
    }
    catch(error : any) {
        
        console.error(` Database Connection failed ---> product-service `);
        console.error(error.message);
        process.exit(1);
        
    }
}