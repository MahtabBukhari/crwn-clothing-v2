import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentfromAuth } from "../../utiles/firebase/firebase.utiles";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'

const defaultFormFiels = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFiels);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFiels)
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password.length < 6) return alert("please enter atleast 6 characters");

    if (password !== confirmPassword) return alert("Please enter your same  password ");

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      createUserDocumentfromAuth(user,{displayName})
      resetFormFields()
    } catch (error) {
      if(error.code === "auth/email-already-in-use") return alert("email already in use");
      console.log("user creation error: " + error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="form-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with email and password</span>
      <form onSubmit={submitHandler}>

      <FormInput
      label="Display Name"
      type="text"
      name="displayName"
      value={displayName}
      onChange={handleChange}
      required
      />
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
      <FormInput
      label="Confirm Password"
      type="password"
      name="confirmPassword"
      value={confirmPassword}
      onChange={handleChange}
      required
      />
     

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
