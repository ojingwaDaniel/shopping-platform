// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUJj8W_9YQ90pp_43o2NOPMZQ0mp6Tonw",
  authDomain: "clothing-shopping-eb2c3.firebaseapp.com",
  projectId: "clothing-shopping-eb2c3",
  storageBucket: "clothing-shopping-eb2c3.appspot.com",
  messagingSenderId: "808256614074",
  appId: "1:808256614074:web:b0dca7fa944fba315e9c83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
