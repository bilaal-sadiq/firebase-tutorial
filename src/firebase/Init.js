// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzk6ErVV3K4TOHdJBkyLK_iz7kQ0Mewo4",
  authDomain: "fir-practise-1f54c.firebaseapp.com",
  projectId: "fir-practise-1f54c",
  storageBucket: "fir-practise-1f54c.appspot.com",
  messagingSenderId: "438577566035",
  appId: "1:438577566035:web:4e9f74c77c302e9149d1a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();