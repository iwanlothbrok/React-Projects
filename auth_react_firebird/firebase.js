// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrMfo_9miVrw3guhRN7Dhygor44u_oy94",
    authDomain: "react-firebird-auth.firebaseapp.com",
    projectId: "react-firebird-auth",
    storageBucket: "react-firebird-auth.appspot.com",
    messagingSenderId: "117684395535",
    appId: "1:117684395535:web:aa65dce09ee00b08600d7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
