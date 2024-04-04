'use client'
import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <button 
        onClick={() => signOut()}
        className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-2 rounded"
    >
    Sign Out
    </button>
  )
}

export default SignOutButton;