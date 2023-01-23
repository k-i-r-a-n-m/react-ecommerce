
import SignUpForm from "../../components/signUpForm/signUpForm.component";
import SignInForm from "../../components/signInForm/signInForm.component";

import './authentication.styles.scss'

const Authentication = () => {
  //   useEffect( () => async()=>{
  //     const response = await getRedirectResult(auth);
  //     console.log(response)
  //     if (response) {
  //       const useDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }, []);

  
  

  return (
    <div className="authentication-container">
      <SignInForm/>
      {/* <button onClick={logGoogleUser}>Sign in with Google!</button> */}
      
      {/* <button onClick={siginInWithGoogleRedirect}>Sign in with Google!</button> */}
      <SignUpForm />
      
    </div> 
  );
};

export default Authentication;
