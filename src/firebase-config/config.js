// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi3zZiiQQmr7jLRLEPK7qBG-R4JzumBGk",
  authDomain: "e-learning-8f4a0.firebaseapp.com",
  projectId: "e-learning-8f4a0",
  storageBucket: "e-learning-8f4a0.appspot.com",
  messagingSenderId: "916309819911",
  appId: "1:916309819911:web:126bd9626e35038ae6e0a2",
  measurementId: "G-NQ32647SW6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
