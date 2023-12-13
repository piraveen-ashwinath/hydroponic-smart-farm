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
  apiKey: "AIzaSyCpUw32P5pNc9QjdTvR3HfDGCpzzynsYlo",
  authDomain: "fertigasiutm-23aaa.firebaseapp.com",
  databaseURL: "https://fertigasiutm-23aaa.firebaseio.com",
  projectId: "fertigasiutm-23aaa",
  storageBucket: "fertigasiutm-23aaa.appspot.com",
  messagingSenderId: "516779375289",
  appId: "1:516779375289:web:38e3d75c3000d7455bf968",
  measurementId: "G-6G0BPP7ZDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const db = getFirestore(app);