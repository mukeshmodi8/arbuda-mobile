// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// 🔐 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBWSu4LK3ajg68izirjffQpJB9BPmoqIRA",
  authDomain: "fir-first-project-f1859.firebaseapp.com",
  databaseURL: "https://fir-first-project-f1859-default-rtdb.firebaseio.com",
  projectId: "fir-first-project-f1859",
  storageBucket: "fir-first-project-f1859.appspot.com", // 🔁 corrected ".app" to ".appspot.com"
  messagingSenderId: "754966972664",
  appId: "1:754966972664:web:b214eaf98327437be5530d",
  measurementId: "G-175CBRQ15S"
};

// 🔧 Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // 🔥 Firebase Auth
export const googleProvider = new GoogleAuthProvider(); // 🧠 Google Auth
const analytics = getAnalytics(app);
