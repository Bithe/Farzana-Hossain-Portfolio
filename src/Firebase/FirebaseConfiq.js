// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: "farzana-portfolio.firebaseapp.com",
  projectId: "farzana-portfolio",
  storageBucket: "farzana-portfolio.appspot.com",
  messagingSenderId: "638926051622",
  appId: "1:638926051622:web:60d957964cf14aca6109e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)