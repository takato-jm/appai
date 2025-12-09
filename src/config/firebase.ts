import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBmNg04zrBQT44lBEaua9Eh1POaR7QNzk",
  authDomain: "skinai-95d56.firebaseapp.com",
  projectId: "skinai-95d56",
  storageBucket: "skinai-95d56.appspot.com", 
  messagingSenderId: "723142689454",
  appId: "1:723142689454:web:c92e6eee9bd6a0b792633f",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
