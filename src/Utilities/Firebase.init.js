// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRtwBQaKm3BARDTmXN5PlVNQkfb3tzSX0",
    authDomain: "dewalt-bd.firebaseapp.com",
    projectId: "dewalt-bd",
    storageBucket: "dewalt-bd.appspot.com",
    messagingSenderId: "916681713089",
    appId: "1:916681713089:web:2b3e4b911d274f800c7b40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
