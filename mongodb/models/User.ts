import { Document, Schema, model, models } from "mongoose";
import connectDB from "../db";

export interface User extends Document{
    name: string;
    age: number;
    email: string;
    languagePreference: string;

}

const userSchema = new Schema<User>({
    name: String,
    age: Number,
    email: String,
    languagePreference: String,
})

const UserModel = models.User || model<User>("User", userSchema);

export async function deleteUserByEmail(email: string): Promise<void>{
    await connectDB();
    
    try {
        const user = await UserModel.findOne({ email });
        if(!user){
            throw new Error("User not found");
        }

        await user.remove();
    } catch(error){
        console.error("Error deleting user: ", error);
        throw error;
    
    }
}

export async function addUser(name: string, age: number, email: string, languagePreference: string) : Promise<User>{
        await connectDB();

        try {
            const user = new UserModel({ name, age, email, languagePreference });

            await user.save();
            
            return user;
        }
        catch(error){
            console.error("Error adding user: ", error);
            throw error;
        }
}

export async function fetchUsers() : Promise<User[]> {
    await connectDB();

    try {
        const users = await UserModel.find();
        return users;
    }
    catch(error){
        console.error("Error fetching users: ", error);
        throw error;
    }
}