// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpOgxQaD79Ee9EBE3iy2n5atknC4LKcAU",
  authDomain: "notesappreact-fffa6.firebaseapp.com",
  projectId: "notesappreact-fffa6",
  storageBucket: "notesappreact-fffa6.appspot.com",
  messagingSenderId: "790174551641",
  appId: "1:790174551641:web:cd9fe50bd551268b372b48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)