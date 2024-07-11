'use client'

import { db } from "@/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if(!session?.user.id) return;
    // push a document into firestore database
    setLoading(true);

    const docRef = await addDoc(collection(db, 'customers', session.user.id, 
      'checkout_sessions'), 
      {
        price: "price_1PbRuvJFZEUYtESEEK2jr2zJ",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    // ... Stripe extension on firebase will create a checkout session 
    //listen to checkout session
    return onSnapshot(docRef, snap => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if(error){
        // Show an error to your customer
        // inspect your Cloud Function logs in the Firebase console
        alert(`An error occured: ${error.message}`);
        setLoading
      }

      if(url){
        // redirect to checkout
        window.location.assign(url);
        setLoading(false);
      } 
    })

    // redirect user to the checkout page
  }
  return (
    <div className="flex flex-col space-y-2">
      {/* If subscribed ~ show me the user is subscribed */}

      <button 
        onClick={() => createCheckoutSession()}
        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80 disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default"
      >
      {/* Loading while creating a checkout session in the background */}
        {
          loading ? 'Loading...' : 'Sign Up Now'
        }
      </button>
    </div>
  );
}

export default CheckoutButton;
