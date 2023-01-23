import { useState } from "react";

import {
  siginInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";

import "./signInForm.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);

      // user.displayName = displayName;
      // createUserDocumentFromAuth(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email!");
          break;
        case "auth/user-not-found":
          alert("no user associated with the email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    const { user } = await siginInWithGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-In-container">
      <h2>Already have an account?</h2>
      <span>Sign In with Email & Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>

          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

// ---------
// NOTE:
// ----------
// by default button inside form type='submit'  ==> change type="button"
