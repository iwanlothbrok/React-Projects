import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdzbg3SRCamRCDgnzFLaUD_D75JksKYY4",
  authDomain: "todo-project-6ce0d.firebaseapp.com",
  projectId: "todo-project-6ce0d",
  storageBucket: "todo-project-6ce0d.appspot.com",
  messagingSenderId: "416868705004",
  appId: "1:416868705004:web:a7b4d926a97e5ec2217bc9",
  measurementId: "G-3X8EZ8CP8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
