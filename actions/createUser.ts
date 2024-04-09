'use server'

import { addUser } from "@/mongodb/models/User";
import { revalidateTag } from "next/cache";

async function createUser(formData: FormData){
    const name = formData.get("name") as string;
    const age = Number(formData.get("age"));
    const email = formData.get("email") as string;
    const languagePreference = formData.get("languagePreference") as string;

    if(!name || !age || !email || !languagePreference){
        throw new Error("Missing required fields");
    }

    const newUser = await addUser(name, age, email, languagePreference);

    console.log("New user added: ", newUser);

    revalidateTag("users");

    return JSON.stringify(newUser);
}

export default createUser;