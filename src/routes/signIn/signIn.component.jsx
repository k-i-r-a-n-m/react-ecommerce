import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  siginInWithGooglePopup,
  createUserDocumentFromAuth,
  siginInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect( () => async()=>{
    const response = await getRedirectResult(auth);
    console.log(response)
    if (response) {
      const useDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await siginInWithGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In!</h1>
      <button onClick={logGoogleUser}>Sign in with Google!</button>
      <button onClick={siginInWithGoogleRedirect}>Sign in with Google!</button>
    </div>
  );
};

export default SignIn;
