// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhLMehHHR5dP9jLiAtpReDhFnnGo9m9p4",
  authDomain: "movie-portal-2ac10.firebaseapp.com",
  projectId: "movie-portal-2ac10",
  storageBucket: "movie-portal-2ac10.firebasestorage.app",
  messagingSenderId: "870289109015",
  appId: "1:870289109015:web:b2cc8dd062b9e929e6ac52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);