// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut as firebaseSignOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnfEkkvmcYKFdVEb8firmk0HEuSAbRU1Q",
  authDomain: "student-project-manageme-22494.firebaseapp.com",
  projectId: "student-project-manageme-22494",
  storageBucket: "student-project-manageme-22494.appspot.com",
  messagingSenderId: "901647886928",
  appId: "1:901647886928:web:a0042f4ea62bc6c0183f55",
  measurementId: "G-DRKLJP4V9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const signOut = () => firebaseSignOut(auth);

export { auth, signOut };
