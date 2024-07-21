// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkqxXEyff9xViv39DNCvULzd4g6lAaTGU",
  authDomain: "netflixgpt-42783.firebaseapp.com",
  projectId: "netflixgpt-42783",
  storageBucket: "netflixgpt-42783.appspot.com",
  messagingSenderId: "567264982865",
  appId: "1:567264982865:web:e77230f86666c39bc88570",
  measurementId: "G-VGRZVV8FF2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
