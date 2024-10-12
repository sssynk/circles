// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtWt4Lba8nqR7aLnwGeo67xDKiVDQxmbQ",
  authDomain: "circles-9f709.firebaseapp.com",
  projectId: "circles-9f709",
  storageBucket: "circles-9f709.appspot.com",
  messagingSenderId: "212292467729",
  appId: "1:212292467729:web:bd97f37be77b3da95805b0",
  measurementId: "G-7XMYQT401W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
