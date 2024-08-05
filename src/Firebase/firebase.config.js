// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9P24vLw6R6bODGqo3aQtzKpaL9pPtbZ0",
  authDomain: "chat-app-eef08.firebaseapp.com",
  projectId: "chat-app-eef08",
  storageBucket: "chat-app-eef08.appspot.com",
  messagingSenderId: "1063362857023",
  appId: "1:1063362857023:web:1ffca52bbe88011805d08a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)