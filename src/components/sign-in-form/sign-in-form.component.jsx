import React, { useState } from "react";
import {

  
  SignInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utiles/firebase/firebase.utiles";
import Button, { BUTTONTYPE_OF_CLASSES } from "../button/button.component";

import FormInput from "../form-input/form-input.component";
import {FormContainer} from"./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
 
  
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
    await signInWithGooglePopup();
   
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await SignInAuthUserWithEmailAndPassword(
        email,
        password
      );
     
      
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
    <FormContainer>
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
          <Button buttonType={BUTTONTYPE_OF_CLASSES.base} type="submit">Sign in</Button>
          <Button type="button" buttonType={BUTTONTYPE_OF_CLASSES.google} onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default SignInForm;
