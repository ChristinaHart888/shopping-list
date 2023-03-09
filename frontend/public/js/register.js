// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

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
const auth = getAuth();

document.getElementById("registerForm").addEventListener('submit', (e) => {
  e.preventDefault()
  const email = document.getElementById("regEmail").value;
  const pass = document.getElementById("regPassword").value;
  const cfmPass = document.getElementById("regConfirmPassword").value;

  if(pass != cfmPass){
    console.log("Password: " + pass + "\nConfirm Password: " + cfmPass);
    return alert("Password does not match!")
  }

  createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User: " + user);
    return alert("Account Created Sucessfully")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error: " + error);
    console.log("Error code: " + errorCode);
    console.log("Error Msg: " + errorMessage);
    if(errorCode == "auth/weak-password") return alert("Your password should be at least 6 characters long!")
    if(errorCode == "auth/email-already-in-use") return alert("Email is already in use. Please use another!")
    return alert("Error!")
    // ..
  });
})



document.getElementById("loginLink").addEventListener('click', (e) => {
  e.preventDefault();
  window.location.replace('/');
})