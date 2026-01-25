import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAswFAycNsVN8HPKOXf6mYoIJrk9jTeUtc",
  authDomain: "smart-attendance-system-47ff4.firebaseapp.com",
  projectId: "smart-attendance-system-47ff4",
  storageBucket: "smart-attendance-system-47ff4.firebasestorage.app",
  messagingSenderId: "436283457736",
  appId: "1:436283457736:web:9652ec6dc7c9831653a5fd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);