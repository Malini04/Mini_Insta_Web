// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBnxfG2muMuI_hEP2VbUUdwI9YLJoW9NA",
  authDomain: "mini-insta-5f0cc.firebaseapp.com",
  projectId: "mini-insta-5f0cc",
  storageBucket: "mini-insta-5f0cc.appspot.com",
  messagingSenderId: "671504305978",
  appId: "1:671504305978:web:317f6c4920dc4b9c5b4a03",
  measurementId: "G-HZ32N4RLL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database  = getDatabase(app);
const auth = getAuth();

export { app, analytics, database, auth }