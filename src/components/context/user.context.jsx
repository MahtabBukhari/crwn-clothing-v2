import { createContext, useContext, useEffect, useState } from "react";
import { createUserDocumentfromAuth, onAuthStateChangedListener } from "../../utiles/firebase/firebase.utiles";

const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(()=>{
   const unSubscribe =onAuthStateChangedListener((user)=>{
 
    if(user){
      createUserDocumentfromAuth(user)
    }
    setCurrentUser(user)

    })

 return unSubscribe
  },[])

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export const UseContext = () => {
  return useContext(userContext);
};
