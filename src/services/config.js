import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "final-tienda-padel-ruquet.firebaseapp.com",
  projectId: "final-tienda-padel-ruquet",
  storageBucket: "final-tienda-padel-ruquet.firebasestorage.app",
  messagingSenderId: "25231032527",
  appId: "1:25231032527:web:56a58a026f0a73f9ff77ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

///////////////////////////////////////////////////////////////////////////
