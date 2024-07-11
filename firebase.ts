import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyBjBsL8mkw7ndPPzCSiO8yrkqRnFmVFOU4",
    authDomain: "lyricolingo.firebaseapp.com",
    projectId: "lyricolingo",
    storageBucket: "lyricolingo.appspot.com",
    messagingSenderId: "105730078827",
    appId: "1:105730078827:web:475bb2cfd9435e2c3f592e"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };