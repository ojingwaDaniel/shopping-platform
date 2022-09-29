import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4t_b_JqbuxZehZHQbb6_wMFN3OVD1nEc",
  authDomain: "fashion-shopping-97f02.firebaseapp.com",
  projectId: "fashion-shopping-97f02",
  storageBucket: "fashion-shopping-97f02.appspot.com",
  messagingSenderId: "465965338984",
  appId: "1:465965338984:web:0c3b95e2ac592fe5fa46dd",
  measurementId: "G-N1Y82KLPTC",
};
export const  userProfileDocument = async (userAuth, additionalData)=>{
  if (!userAuth)return 
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists){
      const {displayName,email} = userAuth
      const createdOn = new Date()
      try{
        await userRef.set({
          displayName,
          email,
          createdOn,
          ...additionalData

        })
      }catch(errors){
        console.log('error creating user')
      }

    }
    return userRef
    
  

}
// export const userProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;
//   const userRef = firestore.doc(`users/${userAuth.uid}`);
//   const snapshot = await userRef.get();
//   if (!snapshot.exists) {
//     const { displayName, email } = userAuth;
//     const createdOn = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdOn,
//         ...additionalData
//       })
//     } catch (error) {
//       console.log("error creating user");
//     }
//   }
//   return userRef;
// };
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
