import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MongoDB connected: " + connectionInstance);
        
    } catch (error) {
        console.log("MongoDB connection error", error);
        //no need to import process bcz it is global object by node.
        process.exit(1);

        
    }
}

export default connectDB