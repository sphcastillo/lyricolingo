'use client'
import { subscriptionRef } from "@/lib/converters/Subscription";
import { useSubscriptionStore } from "@/store/store";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

//custom hook to check if user is subscribed
// get user ~ get subscription status
// using a converter to access firestore data

function SubscriptionProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: session } = useSession();
    const setSubscription = useSubscriptionStore(
        (state) => state.setSubscription
    );

    useEffect(() => {
        if (!session?.user.id) return;
        
        return onSnapshot(subscriptionRef(session?.user.id), (snapshot) => {
            if(snapshot.empty){
                console.log("Attention: User has NO subscription");
                setSubscription(null);
            }else {
                console.log("User has a subscription");
                setSubscription(snapshot.docs[0].data())
            }
        },
    (error) => {
        console.error("ATTN: Error getting subscription: ", error);
    });
    }, [session, setSubscription]);

    return (
        <div>
            {children}
        </div>
    )
}

export default SubscriptionProvider