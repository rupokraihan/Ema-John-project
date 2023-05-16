// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCId0suEP3mYIhTAl435kJk_GYw6DspZAk",
  authDomain: "ema-john-with-firebase-a-48d29.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-48d29",
  storageBucket: "ema-john-with-firebase-a-48d29.appspot.com",
  messagingSenderId: "566948302605",
  appId: "1:566948302605:web:6204968172f692d96fea44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app