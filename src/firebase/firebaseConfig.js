//import 'firebase/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import firebase from "firebase/app";
//import firebase from 'firebase/compat/app';
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';



  const firebaseConfig = {
    apiKey: "AIzaSyDjMMD4rNEMtl8nsVph5pS1-U6_YU1umyk",
    authDomain: "react-app-login-52298.firebaseapp.com",
    projectId: "react-app-login-52298",
    storageBucket: "react-app-login-52298.appspot.com",
    messagingSenderId: "62875534572",
    appId: "1:62875534572:web:4c649f8cad042131db51c9"
  };

  // Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider,
    
}