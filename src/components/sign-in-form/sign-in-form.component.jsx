import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentfromAuth,
  SignInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utiles/firebase/firebase.utiles";
import Button from "../button/button.component";
import { UseContext } from "../context/context.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const {setCurrentUser}= UseContext()
  
  {
    /*after submition the form do form fields empty */
  }
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  {
    /*sign in with google popup*/
  }
  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentfromAuth(response.user);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const {user}= await SignInAuthUserWithEmailAndPassword(
        email,
        password
      );
     
      setCurrentUser(user)
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          return alert("Invalid email or password");
          break;
        case "auth/user-not-found":
          return alert("Invalid email or password");
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
  return (
    <div className="form-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
