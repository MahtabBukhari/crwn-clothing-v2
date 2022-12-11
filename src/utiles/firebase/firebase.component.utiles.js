// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4KbRS-W4KgZME0xCUe-fOqUJ6-oUVgsw",
  authDomain: "crown-clothing-bf3d6.firebaseapp.com",
  projectId: "crown-clothing-bf3d6",
  storageBucket: "crown-clothing-bf3d6.appspot.com",
  messagingSenderId: "1020908669933",
  appId: "1:1020908669933:web:e9f598ce02c8086b5a35e4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
    prompt:"select_account"
})

export const auth =  getAuth()

export const signInWithGooglePopup=()=> signInWithPopup(auth,provider)