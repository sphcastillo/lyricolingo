"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "next-auth";
import { Button } from "@/components/ui/button"
import { signIn, signOut } from "next-auth/react";


function UserButton({ session } : { session : Session | null}) {
    // Subscription listener...

    if(!session)
        return (
            <Button 
                variant={"ghost"} 
                onClick={() => signIn()}

            >
                Sign In
            </Button>

        )
    return (
        <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar 
                    name={session.user?.name} 
                    image={session.user?.image}
                />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
            <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem
                onClick={() => signOut()}
            >
                Sign Out
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    );
}

export default UserButton;
