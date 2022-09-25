import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4t_b_JqbuxZehZHQbb6_wMFN3OVD1nEc",
  authDomain: "fashion-shopping-97f02.firebaseapp.com",
  projectId: "fashion-shopping-97f02",
  storageBucket: "fashion-shopping-97f02.appspot.com",
  messagingSenderId: "465965338984",
  appId: "1:465965338984:web:0c3b95e2ac592fe5fa46dd",
  measurementId: "G-N1Y82KLPTC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
