// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEWe1O8silkE7qM6Os1MAah16nyO7C7R4",
  authDomain: "smartfarm-hydroponic.firebaseapp.com",
  databaseURL: "https://smartfarm-hydroponic-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smartfarm-hydroponic",
  storageBucket: "smartfarm-hydroponic.appspot.com",
  messagingSenderId: "777013021905",
  appId: "1:777013021905:web:44992a1946164f20a849f0",
  measurementId: "G-R3GNRX5BGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const db = getFirestore(app);