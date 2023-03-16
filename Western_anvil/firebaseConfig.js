// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: (import.meta.env.VITE_APP_API_KEY),
  authDomain: "western-anvil.firebaseapp.com",
  projectId: "western-anvil",
  storageBucket: "western-anvil.appspot.com",
  messagingSenderId: (import.meta.env.VITE_APP_MESSAGE_SENDER_ID),
  appId: (import.meta.env.VITE_APP_API_ID )
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
 export const db  = getFirestore(app);
