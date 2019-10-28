import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBwqpcvm--sCsASx1QnipM_9DWRb7XWFdM",
  authDomain: "react-ecommerce-db-bd9dd.firebaseapp.com",
  databaseURL: "https://react-ecommerce-db-bd9dd.firebaseio.com",
  projectId: "react-ecommerce-db-bd9dd",
  storageBucket: "react-ecommerce-db-bd9dd.appspot.com",
  messagingSenderId: "564676075760",
  appId: "1:564676075760:web:be769874a3420b55ee6235",
  measurementId: "G-P7QTMLHY0D"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

// google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
