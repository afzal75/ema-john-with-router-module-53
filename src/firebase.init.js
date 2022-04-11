// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtLn8slbxB6DIzaf2B9_Bi_VTXWQn4jio",
  authDomain: "ema-john-simple-cf47c.firebaseapp.com",
  projectId: "ema-john-simple-cf47c",
  storageBucket: "ema-john-simple-cf47c.appspot.com",
  messagingSenderId: "1025809197518",
  appId: "1:1025809197518:web:b68e694c5acafe753f239f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;