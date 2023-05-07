// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo5_H3E853QW0yhdOgtZ76AMrS-G7Wylk",
  authDomain: "ndakaini-motel.firebaseapp.com",
  projectId: "ndakaini-motel",
  storageBucket: "ndakaini-motel.appspot.com",
  messagingSenderId: "903204857911",
  appId: "1:903204857911:web:923f3c855d242fa5ea37b2",
  measurementId: "G-M3V30PPE8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

// collection ref
export const usersColRef = collection(db, "users");
export const menuColRef = collection(db, "menu");
export const employeeColRef = collection(db, "employee");
export const stockColRef = collection(db, "stock");
