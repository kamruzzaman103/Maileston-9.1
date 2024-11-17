// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbm6O2YiPHtmRLO89b4D87kG7EedZdpJE",
  authDomain: "email-password-auth-6cfcd.firebaseapp.com",
  projectId: "email-password-auth-6cfcd",
  storageBucket: "email-password-auth-6cfcd.firebasestorage.app",
  messagingSenderId: "901556718391",
  appId: "1:901556718391:web:79aea48ab9892bd49aa8b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);