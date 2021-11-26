// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Firebase configuration
import firebaseConfig from "./firabase.config";

const initializeAuthentication = () => {
    // Initialize Firebase
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


