// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYsSSMOxZhIBiCkloCXX5iNLHz2ytcVoI",
  authDomain: "shopping-list-25b7a.firebaseapp.com",
  projectId: "shopping-list-25b7a",
  storageBucket: "shopping-list-25b7a.appspot.com",
  messagingSenderId: "420717283524",
  appId: "1:420717283524:web:30d8cc25e03caaa20ee191",
  measurementId: "G-6941ZP3QGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document

document.getElementById("loginLink").addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace('/');
})