// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4rzUNC9JOxpsJAQEp_CBg7sKYQ_dt-k8",
  authDomain: "netflixclone-6889e.firebaseapp.com",
  projectId: "netflixclone-6889e",
  storageBucket: "netflixclone-6889e.appspot.com",
  messagingSenderId: "578357425817",
  appId: "1:578357425817:web:e1ac7a321168e0a34a2a08",
  measurementId: "G-WV6KPM2QFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();