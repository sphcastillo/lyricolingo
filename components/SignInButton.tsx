'use client'
import { signIn } from "next-auth/react";

function SignInButton() {
  return (
    <button  
        className="bg-purple-200 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded"
        onClick={() => signIn()}
    >
    Sign In
    </button>
  )
}

export default SignInButton;