import firebase from 'firebase/compat/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp} from 'firebase/app';
const Config = {
  apiKey: "AIzaSyDUJj8W_9YQ90pp_43o2NOPMZQ0mp6Tonw",
  authDomain: "clothing-shopping-eb2c3.firebaseapp.com",
  projectId: "clothing-shopping-eb2c3",
  storageBucket: "clothing-shopping-eb2c3.appspot.com",
  messagingSenderId: "808256614074",
  appId: "1:808256614074:web:b0dca7fa944fba315e9c83",
};
const app = initializeApp(Config)
 export const auth = getAuth(app)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({prompt : 'select_account'})
export const signInWithGoogle = ()=> firebase.auth.signInWithPopup(provider)