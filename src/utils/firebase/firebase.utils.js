import { initializeApp } from "firebase/app";

//  seting up authentication
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

// setting up fireStore for database
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// basic config for firebase instance connection
const firebaseConfig = {
  apiKey: "AIzaSyBPadZf7W4OLAaj_gqS7vnPibl-1BCzsWQ",
  authDomain: "crown-clothing-db-46f12.firebaseapp.com",
  projectId: "crown-clothing-db-46f12",
  storageBucket: "crown-clothing-db-46f12.appspot.com",
  messagingSenderId: "924265455448",
  appId: "1:924265455448:web:b8aaaa75d8dc232a978f2d",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// initialize a provider
const provider = new GoogleAuthProvider();

// cofiguring how the authProvider behave
provider.setCustomParameters({
  prompt: "select_account",
});

// auth is common for all the PROVIDER (google,facebook,gihub..etc)
export const auth = getAuth();
export const siginInWithGooglePopup = () => signInWithPopup(auth, provider);
export const siginInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

// initialize fireStore
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // getting document reference is like primary key
  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log(userDocRef);

  // getting a document using getDoc('id')
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user data does not exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error.creating user:", error.message);
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};


export const signOutUser = async()=>{
  return await signOut(auth)
}