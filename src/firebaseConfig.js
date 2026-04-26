// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv-oCYy1YrslUyB7-jTsVGXjyk3ulVsbg",
  authDomain: "barberia-proyecto-fe6f8.firebaseapp.com",
  projectId: "barberia-proyecto-fe6f8",
  storageBucket: "barberia-proyecto-fe6f8.firebasestorage.app",
  messagingSenderId: "917065446352",
  appId: "1:917065446352:web:4dc286a02fa35c76e97fd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);