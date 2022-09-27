// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXDEH3ODj_JEMvebiAkDR_Yfiti0UCfBo",
  authDomain: "reservationkopikat-428c7.firebaseapp.com",
  projectId: "reservationkopikat-428c7",
  storageBucket: "reservationkopikat-428c7.appspot.com",
  messagingSenderId: "916381110317",
  appId: "1:916381110317:web:829cb03761b00a654468a4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);

export { db }