import mongoose from "mongoose";

const connectionString = `mongodb+srv://sphcastillo:${process.env.MONGO_DB_PASSWORD}@user.lrovkna.mongodb.net/?retryWrites=true&w=majority&appName=user`

if(!connectionString) {
    throw new Error("ATTN: Please provide a valid connection string");
};

const connectDB = async () => {
    if(mongoose.connection?.readyState >= 1){
        console.log("--- Already connected to MongoDB ---");
        return;
    }
    
    try {
        await mongoose.connect(connectionString);
        console.log("--- CONGRATS ~ Connected to MongoDB ---");
    } catch (error){
        console.error("Error connecting to MongoDB: ", error);
    }
} 

export default connectDB;