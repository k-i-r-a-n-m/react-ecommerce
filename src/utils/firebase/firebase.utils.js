import { initializeApp } from "firebase/app";

//  seting up authentication
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// setting up fireStore for database
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

// Populating the fireStore database with collection(CATEGORIES) and documents(HAT,SNEKERS...etc)
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

// getting data from firestore (shop page categories)
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;

  // ! The above code get the data from the firestore and create a snapshot of it.
  // ! and map the data into following structure using REDUCE
  // {
  //     hats: {
  //       title: 'Hats',
  //         items: [
  //           {},
  //           {},
  //           ...
  //         ]
  //     }
  // }
};

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

export const signOutUser = async () => {
  return await signOut(auth);
};

//Listens for the auth-change and
// the current user-object is passed as an argument to the callback by firebase
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
