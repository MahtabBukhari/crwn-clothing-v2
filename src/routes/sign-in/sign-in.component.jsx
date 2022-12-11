import { useEffect } from 'react'
import {getRedirectResult} from 'firebase/auth'

import React from 'react'
import { signInWithGooglePopup,signInWithGoogleRedirect, createUserDocumentfromAuth, auth } from '../../utiles/firebase/firebase.utiles'



const SignIn = () => {

  useEffect(async()=>{
    const response = await getRedirectResult(auth)
    if(response){
      const RegisterUser = await createUserDocumentfromAuth(response.user)
          console.log(RegisterUser)

    }
  },[])


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
    <button type="button" onClick={signInWithGoogleRedirect}>sign in with redirect</button>

    </div>
  )
}

export default SignIn