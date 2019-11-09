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
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // const userRef = firestore.doc(`users/${userAuth.uid}`);÷
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    // create new doc ref from collection
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (snapshot) => {
  const transformedCollection = snapshot.docs.map(doc => {
    const { title, items } = doc.data();
    console.log(doc.data());
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

// google auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
