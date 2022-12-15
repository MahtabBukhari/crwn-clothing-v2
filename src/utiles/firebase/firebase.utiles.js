import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc,collection,writeBatch } from "firebase/firestore";

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


//store categoreis in only one transaction
export const addCollectionAndDocuments = async (collectionKey, objectToAdd)=>{

  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach(object=>{
    // tell to the doc which collection where wite hte document
    const docRef = doc(collectionRef, object.title.toLowerCase());
    // batch will add each object to the relevant document in collection 
    batch.set(docRef, object)

  })
  await batch.commit();
  console.log('done')
}








export const createUserDocumentfromAuth = async (userAuth,authenticationInfo={}) => {
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
        ...authenticationInfo
      });
    } catch (error) {
      console.log("error during the user register", error.message);
    }
  }

  return userSnapshot;
};


export const createAuthUserWithEmailAndPassword = async(email, password) =>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email, password)
  
  
}
export const SignInAuthUserWithEmailAndPassword = async(email, password) =>{
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email, password)
  
  
}

export const SignOutUser = async() => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)