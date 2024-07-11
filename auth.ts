import { FirestoreAdapter } from '@auth/firebase-adapter';
import { Firestore } from 'firebase-admin/firestore';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import { adminDb } from './firebase-admin';


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: 'select_account'
                }
            }
        }),
    ],
    // Fix gap ~ signed in thru NextAuth but not in Google/ Firebase
    callbacks: {
        // upgrade session to include user id
        session: async({ session, token }) => {
            if(session?.user){
                if(token.sub){
                    session.user.id = token.sub;
                }
            }
            return session;
        },
        // want to take the token's id and append to user object and return token
        jwt: async({ user, token }) => {
            if(user){
                token.sub = user.id;
            }
            return token;
        }
    },
    // Upgrade our session strategy
    session: {
        strategy: 'jwt',
    },
    adapter: FirestoreAdapter(adminDb) as any,

} satisfies NextAuthOptions;



