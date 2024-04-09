import { fetchUsers } from "@/mongodb/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    const users = await fetchUsers();

    return NextResponse.json(users);
}