
import React from 'react'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import { signInWithGooglePopup, createUserDocumentfromAuth } from '../../utiles/firebase/firebase.utiles'



const SignIn = () => {



  const loginWithGoogle=async()=>{
        
    const response = await signInWithGooglePopup()
    // console.log(response.user)
        const RegisterUser = await createUserDocumentfromAuth(response.user)
        console.log(RegisterUser)
  }
  return (
    <div>
    <div>SignIn page</div>
    <button type="button" onClick={loginWithGoogle}>sign in</button>
<SignUpForm/>
    </div>
  )
}

export default SignIn