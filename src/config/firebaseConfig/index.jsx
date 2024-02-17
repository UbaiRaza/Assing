// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_4S_rvlQGHtPYyc-4nf5HJ5IadCj18mE",
    authDomain: "ubaidraza-93510.firebaseapp.com",
    projectId: "ubaidraza-93510",
    storageBucket: "ubaidraza-93510.appspot.com",
    messagingSenderId: "427588124364",
    appId: "1:427588124364:web:72d3ddebf6b3b27f994c69"
};
// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);



export { firebase_app, auth, db }