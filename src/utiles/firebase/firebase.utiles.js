import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4KbRS-W4KgZME0xCUe-fOqUJ6-oUVgsw",
  authDomain: "crown-clothing-bf3d6.firebaseapp.com",
  projectId: "crown-clothing-bf3d6",
  storageBucket: "crown-clothing-bf3d6.appspot.com",
  messagingSenderId: "1020908669933",
  appId: "1:1020908669933:web:e9f598ce02c8086b5a35e4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//connect with firebase database

export const db = getFirestore();

export const createUserDocumentfromAuth = async (userAuth) => {
  const getDocRef = doc(db, "users", userAuth.uid);

  console.log(getDocRef);
  const userSnapshot = await getDoc(getDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(getDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error during the user register", error.message);
    }
  }

  return userSnapshot;
};
