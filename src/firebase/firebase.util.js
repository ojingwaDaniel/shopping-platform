import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp} from "firebase/app";






const Config = {
  apiKey: "AIzaSyB1AdwUG099kSzcmMLMXEqm7r908hIEEkY",
  authDomain: "shopping-website-f1e24.firebaseapp.com",
  projectId: "shopping-website-f1e24",
  storageBucket: "shopping-website-f1e24.appspot.com",
  messagingSenderId: "622263129431",
  appId: "1:622263129431:web:7f16be4685d3beb6709a12",
  measurementId: "G-LXY26CYWCR",
};

const firebaseApp = initializeApp(Config);


export const auth = getAuth(firebaseApp);
var provider = new GoogleAuthProvider(firebaseApp);
provider.addScope("profile");
provider.addScope("email");
export const  signInWithGoogle = ()=>firebase.auth().signInWithPopup(provider)
  