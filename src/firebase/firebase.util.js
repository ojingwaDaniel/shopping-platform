import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const Config = {
  apiKey: "AIzaSyB1AdwUG099kSzcmMLMXEqm7r908hIEEkY",
  authDomain: "shopping-website-f1e24.firebaseapp.com",
  projectId: "shopping-website-f1e24",
  storageBucket: "shopping-website-f1e24.appspot.com",
  messagingSenderId: "622263129431",
  appId: "1:622263129431:web:7f16be4685d3beb6709a12",
  measurementId: "G-LXY26CYWCR",
};
firebase.initializeApp(Config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoggle = () => auth.signInWithPopup();
export default firebase;
