import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
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
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
