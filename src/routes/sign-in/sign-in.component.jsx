import React from 'react'
import { signInWithGooglePopup } from '../../utiles/firebase/firebase.component.utiles'

const SignIn = () => {
  const loginWithGoogle=async()=>{
        
    const response = await signInWithGooglePopup()
    console.log(response)
  }
  return (
    <div>
    <div>SignIn page</div>
    <button type="button" onClick={loginWithGoogle}>sign in</button>

    </div>
  )
}

export default SignIn