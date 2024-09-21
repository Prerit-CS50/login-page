// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3asa-7Y2QQCItWA7YJ7VMfnmn2w3Ca4g",
  authDomain: "authentication-8f2c2.firebaseapp.com",
  projectId: "authentication-8f2c2",
  storageBucket: "authentication-8f2c2.appspot.com",
  messagingSenderId: "70601283234",
  appId: "1:70601283234:web:f872a781734ef9d20f69fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
