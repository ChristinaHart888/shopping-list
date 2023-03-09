import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

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

document.getElementById("loginForm").addEventListener('submit', (e) => {
    e.preventDefault();
    const auth = getAuth();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPass").value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User Cred: ", userCredential.user);
        window.localStorage.setItem("uid", userCredential.user.uid)
        return window.location.replace('/home')
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorMessage == "auth/wrong-password") return alert("Wrong Password")
        console.log(error)
        return alert("Error")
    });
})

document.getElementById("registerLink").addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace('/register')
})