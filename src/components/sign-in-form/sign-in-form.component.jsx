import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentfromAuth, SignInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utiles/firebase/firebase.utiles";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'

const defaultFormFiels = {
  
  email: "",
  password: "",
 
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFiels);
  const {  email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFiels)
  }

  const signInWithGoogle=async()=>{
        
    const response = await signInWithGooglePopup()
     await createUserDocumentfromAuth(response.user)
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
     const signInResponse = await SignInAuthUserWithEmailAndPassword(email,password)
     console.log(signInResponse)
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/wrong-password') return alert('wrong email or password')
      console.log('signInError', error)
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
      <Button >Sign in</Button>
      <Button buttonType='google' onClick={signInWithGoogle}>Sign in with google</Button>
      
      </div>
      </form>
    </div>
  );
};

export default SignInForm;
