'use client'

import { useSession } from "next-auth/react";

function CheckoutButton() {
  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    if(!session) return;
    // push a document into firestore database

    // ... Stripe extension on firebase will create a checkout session 

    // redirect user to the checkout page
  }
  return (
    <div className="flex flex-col space-y-2">
      {/* If subscribed ~ show me the user is subscribed */}

      <div className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80 disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default">
        <button onClick={() => createCheckoutSession()}>Sign Up</button>
      </div>
    </div>
  );
}

export default CheckoutButton;
