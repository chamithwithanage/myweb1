// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy_MBIixhAWywqM8DNlzUSwdptCpQ5ToA",
  authDomain: "myportpolio-fa89f.firebaseapp.com",
  projectId: "myportpolio-fa89f",
  storageBucket: "myportpolio-fa89f.firebasestorage.app",
  messagingSenderId: "919054142217",
  appId: "1:919054142217:web:e911a31f1bf14ecf8121d8",
  measurementId: "G-72KW9CDS26"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// ✅ Export Firestore instance (default export)
export default db;