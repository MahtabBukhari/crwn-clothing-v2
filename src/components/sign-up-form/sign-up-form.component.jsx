import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentfromAuth } from "../../utiles/firebase/firebase.utiles";

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
    <div>
      <h1>Sign Up with email and password</h1>
      <form onSubmit={submitHandler}>
        <label>Display Name</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
