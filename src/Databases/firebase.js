// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdC0KKac3H3NEcHhENAVGmgtzPZneIiKY",
  authDomain: "proyecto-4-b72d5.firebaseapp.com",
  projectId: "proyecto-4-b72d5",
  storageBucket: "proyecto-4-b72d5.appspot.com",
  messagingSenderId: "675134751328",
  appId: "1:675134751328:web:41bbf1b0d486b220727905"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);

export { db }