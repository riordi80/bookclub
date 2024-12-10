// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmmQn2YbeTKvGOHVRbBKA5JVSQJGcR8Ck",
  authDomain: "bookclub-93fea.firebaseapp.com",
  databaseURL: "https://bookclub-93fea-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookclub-93fea",
  storageBucket: "bookclub-93fea.firebasestorage.app",
  messagingSenderId: "678422568942",
  appId: "1:678422568942:web:a41195ff9e907576ed38ff"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default { getDatabase, ref, onValue, push, set };